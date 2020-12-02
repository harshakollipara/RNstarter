import 'react-native';
import UtilityManager from '../src/utility/UtilityManager';

//objectValidationInstance
test('IntialiseAnalytics', () => {
  expect(
    UtilityManager.googleAnalytics.IntialiseAnalytics(true, 'newUser'),
  ).toBe(undefined);
});
test('setCurrentScreen', () => {
  expect(UtilityManager.googleAnalytics.setCurrentScreen('starterkit')).toBe(
    undefined,
  );
});
test('sendEvent', () => {
  expect(
    UtilityManager.googleAnalytics.sendEvent('testing of set event', 1),
  ).toBe(undefined);
});
