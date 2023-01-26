import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {themes} from '../utils/themes';

const Summary = ({
  formData,
  setFormData,
  screenCount,
  setScreen,
}: SummaryProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FlatList
        style={{paddingTop: 20}}
        data={Object.keys(formData)}
        renderItem={item =>
          item.item === 'age' || item.item === 'consultationDate' ? (
            <Text style={styles.textStyle}>
              {item.item}:{formData[item.item].toISOString().substring(0, 10)}
            </Text>
          ) : (
            <Text style={styles.textStyle}>
              {item.item} : {formData[item.item]}
            </Text>
          )
        }></FlatList>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.buttonGreen]}
          onPress={() => {
            setScreen(0);
            setFormData({});
          }}>
          <Text style={styles.buttonTextStyle}>DONE</Text>
        </Pressable>
      </View>
    </View>
  );
};

type SummaryProps = {
  formData: any;
  screenCount: number;
  setScreen: any;
  setFormData: any;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: scale(themes.FontSize18),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default Summary;
