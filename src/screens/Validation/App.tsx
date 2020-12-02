import React, { Component } from 'react';
import {Text, View, StyleSheet, Button,ScrollView, Alert} from 'react-native';
// import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import UtilityManager from '../../utility/UtilityManager';
import {ErrorType} from '../../utility/Validation/errorMessages';
import MyTextInput from '../../components/MyTextinput';

interface ValidateProps {
}

interface ValidateState {
  name: any,
  userName: any,
  email: any,
  password:any,
  dob: any,
  creditCardNumber: any,
  pinCode: any,
  phoneNumber: any,
}

export default class ValidationApp extends Component<ValidateProps, ValidateState> {
  constructor(props : ValidateProps) {
    super(props);
    this.state = {
      name: false,
      userName: false,
      email: false,
      password:false,
      dob: false,
      creditCardNumber: false,
      pinCode: false,
      phoneNumber: false
    };
  }

  getAllValidations() {
    const { name } = this.state;
    const { userName } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    const { dob } = this.state;
    const { creditCardNumber } = this.state;
    const { pinCode } = this.state;
    const { phoneNumber } = this.state;

    if (name && userName && email && password && dob && creditCardNumber && pinCode && phoneNumber) {

     UtilityManager.consoleLogInstance.printConsoleLog('Submitted Successfully','');
    } else {
      UtilityManager.consoleLogInstance.printConsoleLog('Fill all the required fields','');
    }
  }

  render() {
    return (

      <View style={styles.viewStyle}>
       <Text style={styles.textStyle}>Validation Demo</Text>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
        <MyTextInput
          label={'Name'}
          placeholder={'name'}
          onChangeText={(newName: any) => {
            this.setState({
              name: UtilityManager.uiValidationInstance.validateName(newName),
            });
          }}
          error={this.state.name ? null  : ErrorType.userName}
        />
        <MyTextInput
          label={'Username'}
          placeholder={'username'}
          onChangeText={(newUsername:any) => {
            this.setState({
              userName: UtilityManager.uiValidationInstance.validateUserName(newUsername),
            });
          }}
          error={this.state.userName ? null   : ErrorType.userName}
        />
        <MyTextInput
          label={'Email'}
          placeholder={'email'}
          onChangeText={(newEmail : any) => {
            this.setState({
              email: UtilityManager.uiValidationInstance.validateEmail(newEmail),
            });
          }}
          error={this.state.email ? null  : ErrorType.email}
        />

        <MyTextInput
          label={'Password'}
          placeholder={'password'}
          onChangeText={(newPassword : any) => {
            this.setState({
              password: UtilityManager.uiValidationInstance.validatePassword(newPassword),
            });
          }}
          error={this.state.password ? null  : ErrorType.password}
        />
        
        <MyTextInput
          label={'Date of birth'}
          placeholder={'date of birth'}
          onChangeText={(newDob : any) => {
            this.setState({
              dob: UtilityManager.uiValidationInstance.validateDateOfBirth(newDob),
            });
          }}
          error={this.state.dob ? null  : ErrorType.dob}
        />
        <MyTextInput
          label={'Credit card number'}
          placeholder={'credit card number'}
          onChangeText={(newCreditCardNumber : any) => {
            this.setState({
              creditCardNumber: UtilityManager.uiValidationInstance.validateCreditCardNumber(newCreditCardNumber),
            });
          }}
          error={
            this.state.creditCardNumber ? null : ErrorType.creditCardNumber
          }
        />
        <MyTextInput
          label={'Pincode'}
          placeholder={'pincode'}
          onChangeText={(newPincode : any) => {
            this.setState({
              pinCode: UtilityManager.uiValidationInstance.validatePincode(newPincode),
            });
          }}
          error={this.state.pinCode ? null :  ErrorType.pinCode}
        />
        <MyTextInput
          label={'Phone number'}
          placeholder={'phone number'}
          onChangeText={(newPhonenumber : any) => {
            this.setState({
              phoneNumber: UtilityManager.uiValidationInstance.validatePhoneNumber(newPhonenumber),
            });
          }}
          error={this.state.phoneNumber ? null  : ErrorType.phoneNumber}
        />

        <Button
          color={'black'}
          title="submit"
          onPress={() => {
            this.getAllValidations();
          }}
        />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize:30,
  },
});
