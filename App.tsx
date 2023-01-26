import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Form from './src/screens/Form';
import {DETAILTEXT, REGISTRATIONFORM} from './src/utils/constants';
import {scale} from 'react-native-size-matters';
import {themes} from './src/utils/themes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Form />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
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

export default App;
