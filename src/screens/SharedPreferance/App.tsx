import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SharePreferance from '../../utility/SharedPreference/SharedPreferance.android';
import UtilityManager from '../../utility/UtilityManager';
import { styles } from '../../style/Style';

export default class SharePreferanceApp extends Component {

  componentDidMount() {
    let key = 'ColorOS';
    let values = 'helloWorld'; //'this is my values....'

    SharePreferance.setStringForKey(values, key).then((result: any) => {
      UtilityManager.consoleLogInstance.printConsoleLog('Value Set ' + key, result);

      //get value
      SharePreferance.stringForKey(key).then((result: any) => {
        UtilityManager.consoleLogInstance.printConsoleLog('Value Get ' + key, result);
      });
    });
  }

  render() {
    return (
      <View style={styles.rootStyle}>
        <Text style={styles.rootText}>App.tsx loaded</Text>
      </View>
    );
  }
}