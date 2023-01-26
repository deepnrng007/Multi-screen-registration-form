import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {scale} from 'react-native-size-matters';
import {themes} from '../utils/themes';

const DropdownComponent = ({
  placeholder,
  data,
  value,
  onChange,
  isError,
}: DropDownProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && styles.focusedTextField,
          isError && styles.errorTextField,
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onChange(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

type DropDownProps = {
  placeholder: string;
  data: any;
  value: string;
  onChange: any;
  isError?: boolean;
};
export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
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
  dropdown: {
    fontSize: scale(16),
    color: themes.gray20,
    fontWeight: '500',
    width: '100%',
    paddingLeft: 10,
  },
  focusedTextField: {
    borderBottomColor: themes.green,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: scale(16),
    color: themes.LightGray6,
    fontWeight: '500',
    width: '90%',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  errorTextField: {
    borderBottomColor: themes.Red4,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
