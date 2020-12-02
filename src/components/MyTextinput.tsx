import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface AppProps {
  label: any,
  placeholder: any,
  secureTextEntry ?: any,
  onChangeText: any,
  value ?: any,
  autoCorrect ?: any,
  error ?: any,
}

 export default class MyTextInput extends Component<AppProps> {
  render() {
    const {
      label,
      placeholder,
      secureTextEntry,
      onChangeText,
      value,
      autoCorrect,
      error,
    } = this.props;
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={autoCorrect}
          style={styles.TextInputStyle}
          value={value}
          onChangeText={onChangeText}
        />
        {error ? <Text style={styles.errorLabelStyle}>{error}</Text> : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    color: 'black',
  },
  containerStyle: {
    width: 380,
    flexDirection: 'column',
  },
  errorLabelStyle: {
    fontSize: 13,
    color: 'red',
  },
  TextInputStyle: {
    borderWidth: 1,
  },
});
