import AsyncStorage from '@react-native-community/async-storage';
import UtilityManager from '../UtilityManager';

export default class AsyncStorageManager {
  public async retrieveData(key: any) {
    try {
      let value = await AsyncStorage.getItem(key);
      if (value !== null) {
        UtilityManager.consoleLogInstance.printConsoleLog('Async get:', value);
        return value;
      }
    } catch (error) {
      UtilityManager.consoleLogInstance.printConsoleLog(
        'Error in getting retrieved data',
        error,
      );
    }
  }

  public async storeData(key: any, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      UtilityManager.consoleLogInstance.printConsoleLog('Async is set:', '');
    } catch (error) {
      UtilityManager.consoleLogInstance.printConsoleLog(
        'Error in setting stored data',
        error,
      );
    }
  }
}
