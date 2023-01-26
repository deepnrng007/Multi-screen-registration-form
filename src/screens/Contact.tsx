import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import {themes} from '../utils/themes';
import {
  ADDRESS,
  ADHAARID,
  APPOINTMENTINFORMATION,
  CITIZENSHIP,
  CITY,
  CONTACTINFORMATION,
  COUNTRY,
  EMAIL,
  STATE,
  ZIPCODE,
} from '../utils/constants';
import Textfield from '../components/Textfield';
import {Dropdown} from 'react-native-element-dropdown';
import DropdownComponent from '../components/DropDown';

const Contact = ({
  formData,
  setFormData,
  screenCount,
  setScreen,
}: ContactProps) => {
  const [countries, setCountries] = useState([]);
  const [errorObj, setErrorObj] = useState<any>({});

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setCountries(res);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const newCountryArray: {value: any; label: any}[] = [];
  countries.forEach((item: any, index) => {
    newCountryArray.push({value: item.name, label: item.name});
  });

  const checkFormSubmission = () => {
    var moveToNext = false;
    if (
      formData.email.length == 0 &&
      formData.zipCode.length == 0 &&
      formData.address.length == 0 &&
      formData.country.length == 0
    ) {
      setErrorObj({
        erroremail: true,
        errorzipCode: true,
        erroraddress: true,
        errorcountry: true,
      });
    } else {
      if (formData.email.length == 0) {
        setErrorObj({...errorObj, erroremail: true});
      }
      if (formData.zipCode.length == 0) {
        setErrorObj({...errorObj, errorzipCode: true});
      }
      if (formData.address.length == 0) {
        setErrorObj({...errorObj, erroraddress: true});
      }
      if (formData.country.length == 0) {
        setErrorObj({...errorObj, errorcountry: true});
      } else {
        setErrorObj({
          erroremail: false,
          errorzipCode: false,
          erroraddress: false,
          errorcountry: false,
        });
        moveToNext = true;
      }
    }
    return moveToNext;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textstyle}>{CONTACTINFORMATION}</Text>
        <Text>{`Step ${screenCount + 1}- 5`}</Text>
      </View>
      <ScrollView>
        <Textfield
          placeholder={EMAIL}
          value={formData.email}
          onchangeText={(email: any) => {
            setFormData({...formData, email});
          }}
          keyboardType={'email-address'}
          isError={errorObj['erroremail'] === true}
        />

        <Textfield
          placeholder={ADHAARID}
          value={formData.adhaar}
          onchangeText={(adhaar: any) => {
            setFormData({...formData, adhaar});
          }}
          keyboardType={'number-pad'}
        />
        <Textfield
          placeholder={ADDRESS}
          value={formData.address}
          onchangeText={(address: any) => {
            setFormData({...formData, address});
          }}
          keyboardType={'default'}
          isError={errorObj['erroraddress'] === true}
        />
        <Textfield
          placeholder={ZIPCODE}
          value={formData.zipCode}
          onchangeText={(zipCode: any) => {
            setFormData({...formData, zipCode});
          }}
          keyboardType={'number-pad'}
          isError={errorObj['errorzipCode'] === true}
        />
        <Textfield
          placeholder={CITIZENSHIP}
          value={formData.citizenship}
          onchangeText={(citizenship: any) => {
            setFormData({...formData, citizenship});
          }}
          keyboardType={'default'}
        />
        <Textfield
          placeholder={CITY}
          value={formData.city}
          onchangeText={(city: any) => {
            setFormData({...formData, city});
          }}
          keyboardType={'default'}
        />
        <Textfield
          placeholder={STATE}
          value={formData.state}
          onchangeText={(state: any) => {
            setFormData({...formData, state});
          }}
          keyboardType={'default'}
        />
        <DropdownComponent
          data={newCountryArray}
          onChange={(country: any) => setFormData({...formData, country})}
          placeholder={COUNTRY}
          value={formData.country}
          isError={errorObj['errorcountry'] === true}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setScreen(screenCount - 1);
          }}>
          <Text style={styles.buttonTextStyle}>Previous</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonGreen]}
          onPress={() => {
            const moveToNext = checkFormSubmission();

            if (moveToNext) setScreen(screenCount + 1);
          }}>
          <Text style={styles.buttonTextStyle}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};
type ContactProps = {
  formData: any;
  setFormData: any;
  screenCount: number;
  setScreen: any;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: scale(themes.FontSize24),
    color: themes.green,
    fontWeight: '600',
    marginTop: scale(20),
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: -12,
  },
  button: {
    padding: scale(themes.MediumFontSize),
    borderRadius: scale(themes.MediumFontSize),
    borderColor: themes.lightGray1,
    borderWidth: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(themes.SmallFontSize),
    backgroundColor: themes.lightGray1,
  },
  buttonGreen: {
    padding: scale(themes.MediumFontSize),
    borderRadius: scale(themes.MediumFontSize),
    borderColor: themes.green,
    borderWidth: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(themes.SmallFontSize),

    backgroundColor: themes.green,
  },
  buttonTextStyle: {
    color: themes.White,
    fontSize: scale(themes.FontSize18),
    fontWeight: '600',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(15),
  },
  textstyle: {
    fontSize: scale(themes.fontSize15),
  },
});
export default Contact;
