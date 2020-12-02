'use strict';

import UtilityManager from "../UtilityManager";

var {NativeModules} = require('react-native');
var {RNUserDefaultsIOS} = NativeModules;

export default class SharePreferance {
  /**Set Methods */
  //Set value as Array
  static setArrayForKey(arr : any, key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.setArrayForKey(arr, key, function(result : any) {
        resolve(result);
      });
    });
  }

  //Set Value as String
  static setStringForKey(str : any, key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.setObjectForKey(str, key, function(result : any) {
        resolve(result);
      });
    });
  }

  static setObjectForKey(object : any, key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.setObjectForKey(object, key, function(result : any) {
        resolve(result);
      });
    });
  }

  static setBoolForKey(bool : any, key : any) {
    return new Promise(function(resolve, reject) {
      UtilityManager.consoleLogInstance.printConsoleLog('Sending...', bool);
      RNUserDefaultsIOS.setBoolForKey(bool, key, function(result : any) {
        resolve(result);
      });
    });
  }

  /**
   *
   * Get Methods
   *
   */
  static arrayForKey(key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.arrayForKey(key, function(result : any) {
        resolve(result);
      });
    });
  }

  static stringForKey(key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.stringForKey(key, function(result : any) {
        resolve(result);
      });
    });
  }

  static objectForKey(key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.objectForKey(key, function(result : any) {
        resolve(result);
      });
    });
  }

  static boolForKey(key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.boolForKey(key, function(result : any) {
        resolve(result);
      });
    });
  }

  static removeItemForKey(key : any) {
    return new Promise(function(resolve, reject) {
      RNUserDefaultsIOS.removeItemForKey(key, function(result : any) {
        resolve(result);
      });
    });
  }

  static clearAllPreferance() {
    return new Promise(function(resolve) {
      RNUserDefaultsIOS.clearAllPreferance(function(result : any) {
        resolve(result);
      });
    });
  }
}
