/**
 * @format
 */

import 'react-native';
import UtilityManager from '../src/utility/UtilityManager';

test('validate name', () => {
  expect(UtilityManager.uiValidationInstance.validateName('Aishwarya')).toBe(
    true,
  );
});
test('validate email', () => {
  expect(
    UtilityManager.uiValidationInstance.validateEmail('abc@gmail.com'),
  ).toBe(true);
});
test('validate password', () => {
  expect(
    UtilityManager.uiValidationInstance.validatePassword('Aishwarya@123'),
  ).toBe(true);
});
test('validate Date Of Birth ', () => {
  expect(
    UtilityManager.uiValidationInstance.validateDateOfBirth('16/03/1996'),
  ).toBe(true);
});
test('validateCreditCardNumber', () => {
  expect(
    UtilityManager.uiValidationInstance.validateCreditCardNumber(
      '6521550051138267',
    ),
  ).toBe(true);
});
test('validatePincode', () => {
  expect(UtilityManager.uiValidationInstance.validatePincode('411001')).toBe(
    true,
  );
});

test('validatePhoneNumber', () => {
  expect(
    UtilityManager.uiValidationInstance.validatePhoneNumber('9518328867'),
  ).toBe(true);
});
test('validate username', () => {
  expect(
    UtilityManager.uiValidationInstance.validateUserName('Aishwarya'),
  ).toBe(true);
});
