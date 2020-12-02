/**
 * @format
 */

import 'react-native';
import UtilityManager from '../src/utility/UtilityManager';

//objectValidationInstance
test('is valid', () => {
  expect(UtilityManager.objectValidationInstance.isValid('Aishwarya')).toBe(
    true,
  );
});
test('is string valid', () => {
  expect(
    UtilityManager.objectValidationInstance.isStringValid('Aishwarya'),
  ).toBe(true);
});
test('isArrayNonEmpty', () => {
  expect(
    UtilityManager.objectValidationInstance.isArrayNonEmpty([
      'aishwarya',
      'samarth',
    ]),
  ).toBe(true);
});
test('isStringEmpty', () => {
  expect(
    UtilityManager.objectValidationInstance.isStringEmpty('Aishwarya'),
  ).toBe(false);
});
test('getStringSafely', () => {
  expect(
    UtilityManager.objectValidationInstance.getStringSafely('Aishwarya'),
  ).toBe('Aishwarya');
});
test('isNumberValid', () => {
  expect(UtilityManager.objectValidationInstance.isNumberValid(256615)).toBe(
    true,
  );
});
test('getNumberSafely', () => {
  expect(UtilityManager.objectValidationInstance.getNumberSafely(25698)).toBe(
    25698,
  );
});
test('isBooleanValid', () => {
  expect(UtilityManager.objectValidationInstance.isBooleanValid(true)).toBe(
    true,
  );
});
test('getBooleanSafely', () => {
  expect(UtilityManager.objectValidationInstance.getBooleanSafely(true)).toBe(
    true,
  );
});
