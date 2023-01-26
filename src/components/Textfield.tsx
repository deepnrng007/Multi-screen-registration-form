import {
  Dimensions,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {themes} from '../utils/themes';
import {scale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;

const Textfield = ({
  placeholder,
  onchangeText,
  value,
  keyboardType = 'default',
  isError,
}: TextfieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.textfieldView}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onchangeText}
        value={value}
        keyboardType={keyboardType}
        style={[
          styles.input,
          isFocused && styles.focusedTextField,
          isError && styles.errorTextField,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCorrect={false}
      />
    </View>
  );
};

export default Textfield;

type TextfieldProps = {
  placeholder: string;
  onchangeText: any;
  value: string;
  keyboardType: KeyboardTypeOptions;
  isError?: boolean;
};

const styles = StyleSheet.create({
  errorTextField: {
    borderBottomColor: themes.Red4,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  focusedTextField: {
    borderBottomColor: themes.green,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  textfieldView: {
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
  input: {
    fontSize: scale(16),
    color: themes.gray20,
    fontWeight: '500',
    width: '100%',
    paddingLeft: 10,
  },
});
