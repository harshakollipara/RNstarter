import {NativeModules} from 'react-native';
import {useCallback} from 'react';

const TEST_KEY = 'KEY_NAME';
const TEST_KEY_VALUE = 'MY_VALUE';

NativeModules.RNUserDefaultsIOS = {
  setStringForKey: jest.fn((value, key, callback) =>
    callback(setValueStore(key, value)),
    
  ),
  setObjectForKey: jest.fn((value, key, callback) =>
    callback(setValueStore(key, value)),
    
  ),
  setBoolForKey: jest.fn((value, key, callback) =>
    callback(setValueStore(key, value)),
  ),
  boolForKey: jest.fn((key, callback) => callback(getValueStore(key))),
  stringForKey: jest.fn((key, callback) => callback(getValueStore(key))),
};
var virtualObject = {};

/**SINGLE KEY VALUE */
function setValueStore(key, value) {
  virtualObject[key] = value;
  console.log("i'm saving data", virtualObject);
  return virtualObject;
}

function getValueStore(key) {
  return virtualObject[key];
}
