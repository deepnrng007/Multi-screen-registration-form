import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Account from './Account';
import Appointment from './Appointment';
import Personal from './Personal';
import Contact from './Contact';
import MedicalHistory from './MedicalHistory';
import {scale} from 'react-native-size-matters';
import {themes} from '../utils/themes';
import {modelJSON} from '../utils/jsonData';
import {
  DETAILTEXT,
  REGISTRATIONCOMPLETE,
  REGISTRATIONFORM,
  SUMMARY,
} from '../utils/constants';
import Summary from './Summary';

const Form = () => {
  const [formData, setFormData] = useState(modelJSON);

  const [screen, setScreen] = useState(0);
  const screenTitle = [
    'Account',
    'Appointment',
    'Personal',
    'Contact',
    'Medical History',
  ];

  const ScreenToDisplay = () => {
    switch (screen) {
      case 0:
        return (
          <Account
            formData={formData}
            setFormData={setFormData}
            screenCount={screen}
            setScreen={setScreen}
          />
        );
        break;

      case 1:
        return (
          <Appointment
            formData={formData}
            setFormData={setFormData}
            screenCount={screen}
            setScreen={setScreen}
          />
        );
        break;

      case 2:
        return (
          <Personal
            formData={formData}
            setFormData={setFormData}
            screenCount={screen}
            setScreen={setScreen}
          />
        );
        break;

      case 3:
        return (
          <Contact
            formData={formData}
            setFormData={setFormData}
            screenCount={screen}
            setScreen={setScreen}
          />
        );
        break;

      case 4:
        return (
          <MedicalHistory
            formData={formData}
            setFormData={setFormData}
            screenCount={screen}
            setScreen={setScreen}
          />
        );
        break;
      case 5:
        return (
          <Summary
            formData={formData}
            setFormData={setFormData}
            screenCount={screen}
            setScreen={setScreen}
          />
        );
        break;

      default:
        return (
          <Account
            formData={formData}
            setFormData={setFormData}
            screenCount={screen}
            setScreen={setScreen}
          />
        );
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {screen === 5 ? REGISTRATIONCOMPLETE : REGISTRATIONFORM}
      </Text>
      <Text style={styles.subTitleText}>
        {screen === 5 ? SUMMARY : DETAILTEXT}
      </Text>
      {screen !== 5 && <Text style={styles.header}>{screenTitle[screen]}</Text>}
      {ScreenToDisplay()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
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
    left: -20,
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
  titleText: {
    fontSize: scale(themes.FontSize22),
    fontWeight: '400',
    color: themes.green,
    marginBottom: scale(10),
  },
  subTitleText: {
    fontSize: scale(themes.FontSize18),
    color: themes.gray2,
  },
});
export default Form;
