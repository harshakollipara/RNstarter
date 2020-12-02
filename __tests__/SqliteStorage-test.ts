import 'react-native';
import UtilityManager from '../src/utility/UtilityManager';

it('it can check insert data status ', async () => {
  const name = 'Roshan',
    id = '6060',
    contact = '7722220000';

  await UtilityManager.sqliteStorageInstance
    .Insert_Data(id, contact, name)
    .then(resp => {
      expect(resp).toBe(1);
    });
});
