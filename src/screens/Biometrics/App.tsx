import React, {Component} from 'react';
import {View, Text, Alert, TouchableHighlight} from 'react-native';
import { styles } from '../../style/Style';
import UtilityManager from '../../utility/UtilityManager';

type MyState = {biometryType: any};

interface MyProps {}

export default class BiometricApp extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      biometryType: '',
    };
  }

  componentDidMount() {
    UtilityManager.biometrics.enableTouchID().then((biometryType: any) => {
      this.setState({biometryType});
    });
  }

  _clickHandler() {
    UtilityManager.biometrics
      .enableTouchID()
      .then(UtilityManager.biometrics.authenticateTouchID())
      .catch((error: any) => {
        Alert.alert('TouchID not supported');
      });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={{ fontSize: 25 }}>Click below!</Text>
        <View style={{margin: 5}}>
          <TouchableHighlight
            onPress={() => {
              this._clickHandler();
            }}>
            <Text style={styles.ViewTextStyle}>Authenticate</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
