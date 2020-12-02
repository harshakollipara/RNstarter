
import 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import UtilityManager from '../src/utility/UtilityManager'

  
  it("can read asyncstorage", () => {
    AsyncStorage.setItem('mykey','myvalue')
    return AsyncStorage.getItem('mykey').then(myValue => {
        expect(myValue).toBe('myvalue')
    });  });

it('it can check Offline status ',async ()=>{
   await UtilityManager.newSessionManagment.validateSessionOffline().then(resp => {
    expect(resp).toBeTruthy();
 
})
 
});

