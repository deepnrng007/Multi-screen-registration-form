import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  APPOINTMENTINFORMATION,
  BLOODGROUP,
  DIAGNOSIS,
  MEDICALINFORMATION,
  MEDICALSUMMARY,
} from '../utils/constants';
import {themes} from '../utils/themes';
import {scale} from 'react-native-size-matters';
import DropdownComponent from '../components/DropDown';
import {bloodgroup, yesno} from '../utils/jsonData';
import Textfield from '../components/Textfield';

const MedicalHistory = ({
  formData,
  setFormData,
  screenCount,
  setScreen,
}: MedicalHistoryProps) => {
  const [errorObj, setErrorObj] = useState<any>({});
  const checkFormSubmission = () => {
    var moveToNext = false;
    if (
      formData.medicalDiagnosis.length == 0 &&
      formData.bloodGroup.length == 0
    ) {
      setErrorObj({
        errorMedicalDiagnosis: true,
        errorBloodGroup: true,
      });
    } else {
      if (formData.medicalDiagnosis.length == 0) {
        setErrorObj({...errorObj, errorMedicalDiagnosis: true});
      }
      if (formData.bloodGroup.length == 0) {
        setErrorObj({...errorObj, errorBloodGroup: true});
      } else {
        setErrorObj({
          errorMedicalDiagnosis: false,
          errorBloodGroup: false,
        });
        moveToNext = true;
      }
    }
    return moveToNext;
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textstyle}>{MEDICALINFORMATION}</Text>
        <Text>{`Step ${screenCount + 1}- 5`}</Text>
      </View>
      <DropdownComponent
        data={yesno}
        onChange={(medicalDiagnosis: any) =>
          setFormData({...formData, medicalDiagnosis})
        }
        placeholder={DIAGNOSIS}
        value={formData.medicalDiagnosis}
      />
      <DropdownComponent
        data={bloodgroup}
        onChange={(bloodGroup: any) => setFormData({...formData, bloodGroup})}
        placeholder={BLOODGROUP}
        value={formData.bloodGroup}
      />

      <Textfield
        placeholder={MEDICALSUMMARY}
        value={formData.medicalSummary}
        onchangeText={(medicalSummary: any) => {
          setFormData({...formData, medicalSummary});
        }}
        keyboardType={'default'}
      />
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
          <Text style={styles.buttonTextStyle}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};
type MedicalHistoryProps = {
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
    marginTop: scale(20),
  },
  textstyle: {
    fontSize: scale(themes.fontSize15),
  },
});

export default MedicalHistory;
