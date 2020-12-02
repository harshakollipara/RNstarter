import React, {Component} from 'react';
import {View, TextInput, Text, TouchableHighlight, Alert} from 'react-native';
import UtilityManager from '../../utility/UtilityManager';
import { styles } from '../../style/Style';

interface AppProps {}

interface AppState {
  value: any;
  retrievedValue: any;
}

export default class StorageApp extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: '',
      retrievedValue: '',
    };
  }

  getValue = async () => {
    let getData = await UtilityManager.asyncStorageInstance.retrieveData(
      'myKey',
    );
    // this.setState({
    //   retrievedValue: getData,
    // });
    Alert.alert("Value Received from the stored!", getData);
    UtilityManager.consoleLogInstance.printConsoleLog(
      'value received from store: ',
      getData,
    );
  };

  setValue = async (key: any, value: any) => {
    let getData = await UtilityManager.asyncStorageInstance.storeData(
      key,
      value,
    );
    UtilityManager.consoleLogInstance.printConsoleLog(
      'value stored to store : ',
      getData,
    );
  };

  render() {
    return (
      <View style={styles.container}>
      <View>
          <TextInput
              style={styles.inputStyle}
              placeholder="Type here!"
              onChangeText={(text) => {
                this.setState({value: text});
              }}
              value={this.state.value}
          />
          <View style={styles.viewStyle}>
              <View style={{ margin:5 }}>
                  <TouchableHighlight
        
                      onPress={() => {
                        this.setValue('myKey', this.state.value);
                      }}
                  >
                      <Text style={styles.textStyle}>Submit</Text>
                  </TouchableHighlight>
              </View>
              <View style={{ margin:5 }}>
                  <TouchableHighlight
                     
                      onPress={() => {
                         this.getValue()
                      }}
                  >
                      <Text style={styles.textStyle}>Check</Text>
                  </TouchableHighlight>
              </View>

          </View>
      </View>
      {/* <Text style={ styles.resultText }>{this.state.retrievedValue}</Text> */}
  </View>
    );
  }
}
