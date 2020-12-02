import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UtilityManager from '../../Utility/UtilityManager';

export default class RestApiApp extends Component {

    componentDidMount() {
        this.callApi();
    }

    callApi = () => {
        UtilityManager.consoleLogInstance.printConsoleLog("before", '');
        UtilityManager.restApiClientInstance.invokeGetRequest(UtilityManager.apiManager.getMusicData(), {}, null).then((res) => {
            UtilityManager.consoleLogInstance.printConsoleLog("success data", res);
        }).catch((err) => {
            UtilityManager.consoleLogInstance.printConsoleLog("error data", err);
        });
    }

    render() {
        return (
            <View>
                <Text>Rest API Manager </Text>
            </View>
        );
    }


}
