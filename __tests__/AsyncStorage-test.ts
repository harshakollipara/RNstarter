
import 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

beforeAll(() => { 
    jest.mock('@react-native-community/async-storage');
  })
  it("can read asyncstorage", () => {
    AsyncStorage.setItem('mykey','myvalue')
    return AsyncStorage.getItem('mykey').then(myValue => {
        expect(myValue).toBe('myvalue')
    });  });


