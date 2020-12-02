import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import UtilityManager from '../../utility/UtilityManager';
import {styles} from '../../style/Style';

interface AppProps {}

interface AppState {
  textValue: any;
  resultValue: any;
  buttonEncodeDisabled: any;
  buttonDecodeDisabled: any;
}

export default class SecurityApp extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      resultValue: '',
      textValue: '',
      buttonEncodeDisabled: false,
      buttonDecodeDisabled: true,
    };
  }

  getEncodedData() {
    this.setState({buttonEncodeDisabled: true});
    this.setState({buttonDecodeDisabled: false});
    let receivedEncodedResult = UtilityManager.base64EncodeDecodeInstance.encode(
      this.state.textValue,
    );
    //UtilityManager.consoleLogInstance.printConsoleLog('receivedEncodedResult', receivedEncodedResult);
    Alert.alert("Encoded Value is", receivedEncodedResult);
    // this.setState({
    //   resultValue: receivedEncodedResult,
    // });
  }

  getDecodedData() {
    this.setState({buttonEncodeDisabled: false});
    this.setState({buttonDecodeDisabled: true});
    let receivedDecodedResult = UtilityManager.base64EncodeDecodeInstance.decode(
      this.state.resultValue,
    );
    // UtilityManager.consoleLogInstance.printConsoleLog('receivedDecodedResult', receivedDecodedResult);
    Alert.alert("Decoded Value is",receivedDecodedResult);
    // this.setState({
    //   resultValue: receivedDecodedResult,
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Type here!"
            onChangeText={text => {
              this.setState({textValue: text});
            }}
            value={this.state.textValue}
          />
          <View style={styles.viewStyle}>
            <View style={{margin: 5}}>
              <TouchableHighlight
                disabled={this.state.buttonEncodeDisabled}
                onPress={() => {
                  this.getEncodedData();
                }}>
                <Text style={styles.textStyle}>Encode</Text>
              </TouchableHighlight>
            </View>
            <View style={{margin: 5}}>
              <TouchableHighlight
                disabled={this.state.buttonDecodeDisabled}
                onPress={() => {
                  this.getDecodedData();
                }}>
                <Text style={styles.textStyle}>Decode</Text>
              </TouchableHighlight>
            </View>
          </View>
          </View>
        {/* <Text style={styles.resultText}>{this.state.resultValue}</Text> */}
      </View>
    );
  }
}
