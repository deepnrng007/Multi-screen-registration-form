import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  APPOINTMENTINFORMATION,
  CONSULATTION,
  COSMETICCONSULATTION,
  SELECTCLINICLOCATION,
  SPEICALIST,
} from '../utils/constants';
import {themes} from '../utils/themes';
import {scale} from 'react-native-size-matters';
import DropdownComponent from '../components/DropDown';
import {
  clinicLocation,
  consultationortreatment,
  cosmeticCosultation,
  specialist,
} from '../utils/jsonData';
import CustomDatePicker from '../components/DatePicker';

const data = [
  {label: 'Vasant Vihar', value: '1'},
  {label: 'Greater Kailash', value: '2'},
];
const Appointment = ({
  formData,
  setFormData,
  screenCount,
  setScreen,
}: AppointmentProps) => {
  const [errorObj, setErrorObj] = useState<any>({});
  const checkFormSubmission = () => {
    var moveToNext = false;
    if (
      formData.clinicLocation.length == 0 &&
      formData.consultation.length == 0 &&
      formData.cosmeticConsultation.length == 0 &&
      formData.specialist.length == 0
    ) {
      setErrorObj({
        errorclinicLocation: true,
        errorconsultation: true,
        errorcosmeticConsultation: true,
        errorspecialist: true,
      });
    } else {
      if (formData.clinicLocation.length == 0) {
        setErrorObj({...errorObj, errorclinicLocation: true});
      }
      if (formData.consultation.length == 0) {
        setErrorObj({...errorObj, errorconsultation: true});
      }
      if (formData.cosmeticConsultation.length == 0) {
        setErrorObj({...errorObj, errorcosmeticConsultation: true});
      }
      if (formData.specialist.length == 0) {
        setErrorObj({...errorObj, errorspecialist: true});
      } else {
        setErrorObj({
          ...errorObj,
          errorclinicLocation: false,
          errorconsultation: false,
          errorcosmeticConsultation: false,
          errorspecialist: false,
        });
        moveToNext = true;
      }
    }
    return moveToNext;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textstyle}>{APPOINTMENTINFORMATION}</Text>
        <Text>{`Step ${screenCount + 1}- 5`}</Text>
      </View>
      <ScrollView style={styles.container}>
        <DropdownComponent
          data={clinicLocation}
          onChange={(clinicLocation: any) =>
            setFormData({...formData, clinicLocation})
          }
          placeholder={SELECTCLINICLOCATION}
          value={formData.clinicLocation}
          isError={errorObj['errorclinicLocation'] === true}
        />
        <DropdownComponent
          data={consultationortreatment}
          onChange={(consultation: any) =>
            setFormData({...formData, consultation})
          }
          placeholder={CONSULATTION}
          value={formData.consultation}
          isError={errorObj['errorconsultation'] === true}
        />
        <DropdownComponent
          data={cosmeticCosultation}
          onChange={(cosmeticConsultation: any) =>
            setFormData({...formData, cosmeticConsultation})
          }
          placeholder={COSMETICCONSULATTION}
          value={formData.cosmeticConsultation}
          isError={errorObj['errorcosmeticConsultation'] === true}
        />
        <DropdownComponent
          data={specialist}
          onChange={(specialist: any) => setFormData({...formData, specialist})}
          placeholder={SPEICALIST}
          value={formData.specialist}
          isError={errorObj['errorspecialist'] === true}
        />
        <CustomDatePicker
          date={formData.consultationDate}
          onConfirm={(consultationDate: any) =>
            setFormData({...formData, consultationDate})
          }
          title={'Consultation Date'}
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
type AppointmentProps = {
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
});

export default Appointment;
