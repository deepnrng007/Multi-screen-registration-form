import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {themes} from '../utils/themes';
import {scale} from 'react-native-size-matters';
import DatePicker from 'react-native-date-picker';

const CustomDatePicker = ({date, onConfirm, title}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Text style={styles.dateStyle}>{title}</Text>
      <View style={styles.datepickercontainer}>
        <Pressable style={styles.datepicker} onPress={() => setOpen(true)}>
          <Text style={styles.dateStyle}>
            {date.toISOString().substring(0, 10)}
          </Text>
          <Image
            source={require('../assets/calender.jpeg')}
            style={{height: 35, width: 35}}
          />
        </Pressable>
      </View>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={consultationDate => {
          setOpen(false);
          onConfirm(consultationDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

type DatePickerProps = {
  date: any;
  onConfirm: any;
  title: string;
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  datepickercontainer: {
    borderColor: themes.gray1,
    fontWeight: '500',
    borderWidth: scale(1),
    borderRadius: scale(5),
    marginTop: scale(8),
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
    paddingTop: scale(10),
    fontWeight: '600',
  },
});
