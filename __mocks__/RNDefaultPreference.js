import {NativeModules} from 'react-native';
const TEST_KEY = 'KEY_NAME';
const TEST_KEY_VALUE = 'MY_VALUE';
NativeModules.RNDefaultPreference = {
  setName: jest.fn().mockImplementation(value => Promise.resolve(value)),
  set: jest
    .fn()
    .mockImplementation((key, value) =>
      Promise.resolve(setValueStore(key, value)),
    ),

  get: jest
    .fn()
    .mockImplementation(value => Promise.resolve(getValueStore(value))),

  setMultiple: jest
    .fn()
    .mockImplementation(value => Promise.resolve(multiSetValueStore(value))),

  getMultiple: jest
    .fn()
    .mockImplementation(keys => Promise.resolve(multiGetValueStore(keys))),

  getName: jest.fn().mockImplementation(value => Promise.resolve(value)),

  getBoolean: jest
    .fn()
    .mockImplementation(value => Promise.resolve(getValueStore(value))),

  setBoolean: jest
    .fn()
    .mockImplementation((key, value) =>
      Promise.resolve(setValueStore(key, value)),
    ),
};
var virtualObject = {};

/**SINGLE KEY VALUE */
function setValueStore(key, value) {
  virtualObject[key] = value;
  return virtualObject;
}

function getValueStore(key) {
  return virtualObject[key];
}

/**MULTIPLE SET KEY VALUES */
function multiSetValueStore(keyValues) {
  virtualObject = {...virtualObject, ...keyValues};
  console.log('multiSetValueStore virtual', virtualObject);

  return virtualObject;
}

/**MULTIPLE GET KEY VALUES */
function multiGetValueStore(keys) {
  const temp = keys.map(obj => virtualObject[obj]);
  return temp;
}
