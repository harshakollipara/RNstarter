import SQLite from 'react-native-sqlite-storage';
import UtilityManager from '../UtilityManager';
import { Alert } from 'react-native';

var db = SQLite.openDatabase(
  {
    name: 'myTestDB.db',
    location: 'default',
    createFromLocation: '~www/myTestDB.db',
  },
  () => { },
  error => {
    UtilityManager.consoleLogInstance.printConsoleLog('Sqlite Initiation Error', error);
  }

);

export default class SQLiteStorageManager {

  public async insertData(id: string, key: string, contact: any) {
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO myTestDB (ID,Key, Contact) VALUES (?,?,?)',
        [id, key, contact],
        (tx, results) => {
          UtilityManager.consoleLogInstance.printConsoleLog('Results after inserted', results);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Data Inserted Successfully....',
              [
                {
                  text: 'Ok',
                },
              ],
              { cancelable: false }
            );
          } else {
            Alert.alert('Data Not Inserted..');
          }
        }
      );
    });
  }


  public async searchData(searchId: string) {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM myTestDB where ID = ?',
        [searchId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {

            Alert.alert('Data found');
          } else {
            Alert.alert('No data found');

          }
        }
      );
    });
  }


  public async updateData(id: string, key: string, contact: any, searchId: string) {

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE myTestDB set ID=?, Key=? , Contact=? where ID=?',
        [id, key, contact, searchId],
        (tx, results) => {
          UtilityManager.consoleLogInstance.printConsoleLog('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Success', 'Data updated successfully');
          } else {
            Alert.alert('Updation Failed');
          }
        }
      );
    });
  }



  public async deleteData(searchId: string) {

    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM myTestDB where ID=?',
        [searchId],
        (tx, results) => {
          UtilityManager.consoleLogInstance.printConsoleLog('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Data deleted successfully'
            );
          } else {
            Alert.alert('Please insert a valid Id');
          }
        }
      );
    });
  }
}