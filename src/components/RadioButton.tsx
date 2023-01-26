import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {GENDER} from '../utils/constants';
import {themes} from '../utils/themes';
const RadioButton = ({data, onPress, value}: RadioButtonProps) => {
  return (
    <>
      <Text style={styles.dateStyle}>{GENDER}</Text>
      <View style={styles.parentContainer}>
        {data.map((res: any) => {
          return (
            <View key={res.value} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  onPress(res.value);
                }}>
                {value === res.value && <View style={styles.selectedRb} />}
              </TouchableOpacity>
              <Text style={styles.radioText}>{res.label}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

type RadioButtonProps = {
  data: any;
  onPress: any;
  value: string;
};

export default RadioButton;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
  },

  container: {
    marginBottom: scale(themes.FontSize18),
    marginTop: scale(12),
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  radioText: {
    marginLeft: scale(themes.fontSize15),
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: themes.Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: themes.Black,
  },
  dateStyle: {
    fontSize: scale(themes.FontSize18),
    marginTop: scale(themes.LargeFontSize),
    fontWeight: '800',
  },
});
