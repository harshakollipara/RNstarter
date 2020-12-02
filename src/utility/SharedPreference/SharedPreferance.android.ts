import { NativeModules } from 'react-native';
import UtilityManager from '../UtilityManager';
const RNDefaultPreference = NativeModules.RNDefaultPreference;
let NAME_FOR_SHARED_PREFERANCE =
  'app_idenifier_id'; /**Add Bundle idenifier for unique and Secure transection */

export default class SharePreferance {
  constructor() {

    RNDefaultPreference.setName(NAME_FOR_SHARED_PREFERANCE).then((value: any) => {
      UtilityManager.consoleLogInstance.printConsoleLog('Name of Shared Preference', value);
    });
  }

  setPreferanceName(name: any) {
    NAME_FOR_SHARED_PREFERANCE = name;
    RNDefaultPreference.setName(NAME_FOR_SHARED_PREFERANCE).then((value: any) => {
      UtilityManager.consoleLogInstance.printConsoleLog('Name of Shared Preference', NAME_FOR_SHARED_PREFERANCE);
    });
  }

  /**Set Methods */
  //Set value as Array
  static setArrayForKey(arr: any, key: any) {
    SharePreferance.setStringForKey(JSON.stringify(arr), key);
  }

  //Set Value as String
  static setStringForKey(str: string, key: string) {
    return new Promise(function (resolve: any, reject: any) {
      RNDefaultPreference.set(key, str).then((values: any) => {
        resolve(true);
      });
    });
  }

  static setObjectForKey(object: any, key: any) {
    SharePreferance.setStringForKey(JSON.stringify(object), key);
  }

  static setBoolForKey(bool: boolean, key: any) {
    return new Promise(function (resolve, reject) {
      RNDefaultPreference.setBoolean(key, bool).then((values: any) => {
        resolve(true);
      });
    });
  }

  /**
   * Get Methods
   *
   */
  static arrayForKey(key: any) {
    return new Promise(function (resolve, reject) {
      RNDefaultPreference.get(key, function (result: any) {
        resolve(JSON.parse(result));
      });
    });
  }

  static stringForKey(key: string) {
    return new Promise(function (resolve, reject) {
      RNDefaultPreference.get(key).then((value: any) => {
        resolve(value);
      });
    });
  }

  static objectForKey(key: any) {
    return new Promise(function (resolve, reject) {
      RNDefaultPreference.get(key, function (result: any) {
        resolve(JSON.parse(result));
      });
    });
  }

  static boolForKey(key: any) {
    return new Promise(function (resolve, reject) {
      RNDefaultPreference.getBoolean(key).then((value: any) => {
        resolve(value);
      });
    });
  }

  static removeItemForKey(key: any) {
    return new Promise(function (resolve, reject) {
      RNDefaultPreference.clear(key).then((value: any) => {
        UtilityManager.consoleLogInstance.printConsoleLog('clearValueBykey', value);
      });
    });
  }

  // Clear all the Data
  clearAllPreferance() {
    return new Promise(function (resolve) {
      RNDefaultPreference.clearAll().then((value: any) => {
        UtilityManager.consoleLogInstance.printConsoleLog('clearAllPreferance', value);
        resolve(true);
      });
    });
  }
}
