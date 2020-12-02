jest.mock('react-native-sqlite-storage', () => {
    // const mockSQLite = require('react-native-sqlite-storage');
    const mockSQLite = {
      openDatabase: (...args) => {
        return {
          transaction: (...args) => {
            executeSql: (query) => { return []; }
          }
        };
      }
    }
  
    return mockSQLite;
  });