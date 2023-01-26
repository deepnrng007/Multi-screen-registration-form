import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {themes} from '../utils/themes';
import {scale} from 'react-native-size-matters';
import {
  APPOINTMENTINFORMATION,
  FATHERNAME,
  MARITALSTATUS,
  OCCUPATION,
  PANELNAME,
  PERSONALINFORMATION,
  SOURCE,
} from '../utils/constants';
import Textfield from '../components/Textfield';
import DropdownComponent from '../components/DropDown';
import {
  maleFemale,
  maritalStatusList,
  panelList,
  sourceList,
} from '../utils/jsonData';
import CustomDatePicker from '../components/DatePicker';
import RadioButton from '../components/RadioButton';

const Personal = ({
  formData,
  setFormData,
  screenCount,
  setScreen,
}: PersonalProps) => {
  // fatherName: '',
  // panelName: '',
  // age: '',
  // gender: '',
  // maritalStatus: '',
  // source: '',
  // occupation: '',
  const [errorObj, setErrorObj] = useState<any>({});
  const checkFormSubmission = () => {
    var moveToNext = false;
    if (
      formData.fatherName.length == 0 &&
      formData.panelName.length == 0 &&
      formData.maritalStatus.length == 0 &&
      formData.source.length == 0 &&
      formData.occupation.length == 0
    ) {
      setErrorObj({
        errorfatherName: true,
        errorpanelName: true,
        errormaritalStatus: true,
        errorsource: true,
        erroroccupation: true,
      });
    } else {
      if (formData.fatherName.length == 0) {
        setErrorObj({...errorObj, errorfatherName: true});
      }
      if (formData.panelName.length == 0) {
        setErrorObj({...errorObj, errorpanelName: true});
      }
      if (formData.maritalStatus.length == 0) {
        setErrorObj({...errorObj, errormaritalStatus: true});
      }
      if (formData.source.length == 0) {
        setErrorObj({...errorObj, errorsource: true});
      }
      if (formData.occupation.length == 0) {
        setErrorObj({...errorObj, erroroccupation: true});
      } else {
        setErrorObj({
          errorfatherName: false,
          errorpanelName: false,
          errormaritalStatus: false,
          errorsource: false,
          erroroccupation: false,
        });
        moveToNext = true;
      }
    }
    return moveToNext;
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textstyle}>{PERSONALINFORMATION}</Text>
        <Text>{`Step ${screenCount + 1}- 5`}</Text>
      </View>

      <ScrollView>
        <Textfield
          placeholder={FATHERNAME}
          value={formData.fatherName}
          onchangeText={(fatherName: any) => {
            setFormData({...formData, fatherName});
          }}
          keyboardType={'default'}
          isError={errorObj['errorfatherName'] === true}
        />

        <DropdownComponent
          data={panelList}
          onChange={(panelName: any) => setFormData({...formData, panelName})}
          placeholder={PANELNAME}
          value={formData.panelName}
          isError={errorObj['errorpanelName'] === true}
        />

        <CustomDatePicker
          date={formData.age}
          onConfirm={(age: any) => setFormData({...formData, age})}
          title={'Age'}
        />

        <RadioButton
          data={maleFemale}
          onPress={(gender: any) => setFormData({...formData, gender})}
          value={formData.gender}
        />

        <DropdownComponent
          data={maritalStatusList}
          onChange={(maritalStatus: any) =>
            setFormData({...formData, maritalStatus})
          }
          placeholder={MARITALSTATUS}
          value={formData.maritalStatus}
          isError={errorObj['errormaritalStatus'] === true}
        />
        <DropdownComponent
          data={sourceList}
          onChange={(source: any) => setFormData({...formData, source})}
          placeholder={SOURCE}
          value={formData.source}
          isError={errorObj['errorsource'] === true}
        />

        <Textfield
          placeholder={OCCUPATION}
          value={formData.occupation}
          onchangeText={(occupation: any) => {
            setFormData({...formData, occupation});
          }}
          keyboardType={'default'}
          isError={errorObj['erroroccupation'] === true}
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

type PersonalProps = {
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
    paddingTop: scale(themes.LargeFontSize),
  },
  textstyle: {
    fontSize: scale(themes.fontSize15),
  },
  datepickercontainer: {
    borderColor: themes.gray1,
    fontWeight: '500',
    borderWidth: scale(1),
    borderRadius: scale(5),
    marginTop: scale(12),
    backgroundColor: themes.White,
    height: scale(50),
    fontSize: scale(16),
    flexDirection: 'row',
    alignItems: 'stretch',
    color: themes.Black,
    width: '100%',
  },
  datepicker: {
    fontSize: scale(16),
    color: themes.gray20,
    fontWeight: '500',
    width: '90%',
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateStyle: {
    fontSize: scale(themes.FontSize18),
  },
});
export default Personal;
