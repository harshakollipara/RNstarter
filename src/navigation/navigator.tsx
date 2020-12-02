import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import StorageApp from '../screens/AsyncStorage/App';
import SecurityApp from '../screens/Security/App';
import AnalyticsApp from '../screens/GoogleAnalytics/App';
import ValidationApp from '../screens/Validation/App';
import JailBreakApp from '../screens/JailBreak/App';
import SessionApp from '../screens/Session/App';
import SharePreferanceApp from '../screens/SharedPreferance/App';
import SqliteStorageApp from '../screens/SqliteStorage/App';
import BiometricApp from '../screens/Biometrics/App';

export default class AppNav extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Storage" component={StorageApp} />
          <Stack.Screen name="Security" component={SecurityApp} />
          <Stack.Screen name="Firebase" component={AnalyticsApp} />
          <Stack.Screen name="Validation" component={ValidationApp} />
          <Stack.Screen name="JailBreak" component={JailBreakApp} />
          <Stack.Screen name="TestApi" component={SessionApp} />
          <Stack.Screen name="SharePreference" component={SharePreferanceApp} />
          <Stack.Screen name="sqlite" component={SqliteStorageApp} />
          <Stack.Screen name="biometrics" component={BiometricApp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
