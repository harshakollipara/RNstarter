import TouchID from 'react-native-touch-id';
import {Alert} from 'react-native';

export default class BiometricsManager {
  public enableTouchID() {
    return TouchID.isSupported();
  }

  public authenticateTouchID() {
    return TouchID.authenticate()
      .then((success: any) => {
        Alert.alert('Authenticated Successfully');
      })
      .catch((error: {message: any}) => {
        Alert.alert(error.message);
      });
  }
}
