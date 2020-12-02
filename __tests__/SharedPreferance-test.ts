import SharedPreferance from '../src/utility/SharedPreference/SharedPreferance.android';
jest.mock('RNUserDefaultsIOS');
jest.mock('RNDefaultPreference');
import 'RNUserDefaultsIOS';
import 'RNDefaultPreference';

const TEST_KEY = 'KEY_NAME';
const TEST_KEY_VALUE = false;
test('\n\n\n works with data set bool async/await', async () => {
  let result = await SharedPreferance.setBoolForKey(TEST_KEY_VALUE, TEST_KEY);
  expect(result);
});

test('\n\n\n works with data get bool async/await', async () => {
  let result = await SharedPreferance.boolForKey(TEST_KEY);
  expect(result).toBe(false);
});

test('\n\n\n works with data set string async/await', async () => {
  let result = await SharedPreferance.setStringForKey('abcd', 'key');
  expect(result);
});

test('\n\n\n works with data get string async/await', async () => {
  let result = await SharedPreferance.stringForKey('key');
  expect(result).toBe('abcd');
});
