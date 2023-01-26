import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Textfield from '../components/Textfield';
import {BASICINFORMATION, MOBILENO, PATIENTNAME} from '../utils/constants';
import {scale} from 'react-native-size-matters';
import {themes} from '../utils/themes';

const Account = ({
  formData,
  setFormData,
  screenCount,
  setScreen,
}: AccountProps) => {
  const [errorObj, setErrorObj] = useState<any>({});
  const checkFormSubmission = () => {
    var moveToNext = false;

    if (formData.patientName.length == 0 && formData.mobileNo.length == 0) {
      setErrorObj({errorInpatientName: true, errorInMobileNo: true});
    } else if (formData.patientName.length == 0) {
      setErrorObj({errorInpatientName: true});
    } else if (formData.mobileNo.length == 0) {
      setErrorObj({errorInMobileNo: true});
    } else {
      setErrorObj({errorInpatientName: false, errorInMobileNo: false});
      moveToNext = true;
    }
    return moveToNext;
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.textstyle}>{BASICINFORMATION}</Text>
        <Text>{`Step ${screenCount + 1}- 5`}</Text>
      </View>

      <Textfield
        placeholder={PATIENTNAME}
        value={formData.patientName}
        onchangeText={(patientName: any) => {
          setErrorObj({errorInpatientName: false});
          setFormData({...formData, patientName});
        }}
        keyboardType={'default'}
        isError={errorObj['errorInpatientName'] === true}
      />
      <Textfield
        placeholder={MOBILENO}
        value={formData.mobileNo}
        onchangeText={(mobileNo: any) => {
          setErrorObj({errorInMobileNo: false});
          setFormData({...formData, mobileNo});
        }}
        keyboardType={'phone-pad'}
        isError={errorObj['errorInMobileNo'] === true}
      />
      <View style={styles.buttonContainer}>
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
type AccountProps = {
  formData: any;
  setFormData: any;
  screenCount: number;
  setScreen: any;
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: -20,
  },
  parentContainer: {
    flex: 1,
    paddingTop: scale(themes.LargeFontSize),
  },
  textstyle: {
    fontSize: scale(themes.fontSize15),
  },
});
export default Account;
