import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import UtilityManager from '../../utility/UtilityManager';
import {styles} from '../../style/Style';

interface TestApiState {}

interface TestApiProps {
  buttonText: any;
}

export default class SessionApp extends Component<TestApiState, TestApiProps> {
  constructor(props: TestApiProps) {
    super(props);
    this.state = {
      buttonText: 'Login',
    };
  }

  callApi = () => {
    UtilityManager.restApiClientInstance
      .invokeGetRequest(UtilityManager.apiManager.getMusicData(), {}, null)
      .then((res: any) => {
        Alert.alert("Login Session", JSON.stringify(res));
        UtilityManager.consoleLogInstance.printConsoleLog('Calling Api', res);
        UtilityManager.newSessionManagment.saveJWT(JSON.stringify(res));
        this.setState({
          buttonText: 'Logout',
        });
      })
      .catch(err => {
        UtilityManager.consoleLogInstance.printConsoleLog(
          'Failed in calling Api',
          err,
        );
      });
  };
  componentDidMount() {
    //get saved session id and update the button text
    UtilityManager.newSessionManagment.validateSessionOffline().then(resp => {
      this.setState({
        buttonText: resp == true ? 'Login' : 'Logout',
      });
    });
  }

  checkSession() {
    //add a loader while data is save in aync storage
    if (this.state.buttonText == 'Login') {
      this.callApi();
    } else if (this.state.buttonText == 'Logout') {
      UtilityManager.newSessionManagment.logout();
      this.setState({
        buttonText: 'Login',
      });
      Alert.alert("Logged out Session");
      UtilityManager.consoleLogInstance.printConsoleLog(
        'Successfully Logged out',
        '',
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style = {styles.buttonStyle}>
      <TouchableOpacity
      activeOpacity={0.5}
        onPress={() => {
          this.checkSession();
        }}
      >
      <Text style= {styles.buttonText}>{this.state.buttonText}</Text>
      </TouchableOpacity>
      </View>
    </View>
    );
  }
}
