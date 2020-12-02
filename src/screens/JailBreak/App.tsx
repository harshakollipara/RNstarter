import React, { Component } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import UtilityManager from "../../utility/UtilityManager";
import { styles } from "../../style/Style";


export default class JailBreakApp extends Component {

    checkRootStatus() {
        Alert.alert("Root check of this device",JSON.stringify(UtilityManager.jailBreak.isJailBroken()))
    }

    render() {
        return (

            <View style={styles.container}>
            <View style = {styles.buttonStyle}>
            <TouchableOpacity
            activeOpacity={0.5}
              onPress={() => {
                this.checkRootStatus();
              }}
            >
            <Text style= {styles.buttonText}>CHECK ROOT STATUS</Text>
            </TouchableOpacity>
            </View>
          </View>

        );
    }
}
