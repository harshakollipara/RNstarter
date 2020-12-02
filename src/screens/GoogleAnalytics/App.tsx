import React, {Component} from 'react';
import { View, Alert, TouchableOpacity, Text} from 'react-native';
import UtilityManager from '../../utility/UtilityManager';
import { styles } from '../../style/Style';

export default class AnalyticsApp extends Component {
  componentDidMount() {
    UtilityManager.googleAnalytics.IntialiseAnalytics(true, 'newUser');
  }
  setScreen() {
    UtilityManager.googleAnalytics.setCurrentScreen('starterkit');
    Alert.alert("Check your activity in console.firebase.com");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.buttonStyle}>
        <TouchableOpacity
        activeOpacity={0.5}
          onPress={() => {
            this.setScreen();
          }}
        >
        <Text style= {styles.buttonText}>Check Events in Firebase</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
