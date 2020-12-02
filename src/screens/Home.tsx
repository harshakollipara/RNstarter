import React, {Component} from 'react';
import {View, Button, ScrollView, Text, TouchableOpacity} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {styles} from '../style/Style';
import StorageApp from './AsyncStorage/App';
import SecurityApp from './Security/App';
import AnalyticsApp from './GoogleAnalytics/App';
import JailBreakApp from './JailBreak/App';
import SessionApp from './Session/App';

interface AppProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export default class Home extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.rootStyle}>
          <View style={styles.rootView}>
            <Text style={styles.headerText}>Storage Demo</Text>
            <View style={styles.ItemSeparator} />
            <StorageApp />
          </View>

          <View style={styles.rootView}>
            <Text style={styles.headerText}>Security Demo</Text>
            <View style={styles.ItemSeparator} />
            <SecurityApp />
          </View>

          <View style={styles.rootView}>
            <Text style={styles.headerText}>Google Analytics Demo</Text>
            <View style={styles.ItemSeparator} />
            <AnalyticsApp />
          </View>
          <View style={styles.rootView}>
            <Text style={styles.headerText}>Validation Check</Text>
            <View style={styles.ItemSeparator} />
            <View style={styles.buttonStyle}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  this.props.navigation.navigate('Validation');
                }}>
                <Text style={styles.buttonText}>Go to Validation Demo</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rootView}>
            <Text style={styles.headerText}>Jail Break Demo</Text>
            <View style={styles.ItemSeparator} />
            <JailBreakApp />
          </View>
          <View style={styles.rootView}>
            <Text style={styles.headerText}>Session Management Demo</Text>
            <View style={styles.ItemSeparator} />
            <SessionApp />
          </View>
          <View style={styles.rootView}>
            <Button
              color="black"
              title="Go to Shared Preference Demo"
              onPress={() => {
                this.props.navigation.navigate('SharePreference');
              }}
            />
          </View>
          <View style={styles.rootView}>
            <Button
              title="Go to SQLite Storage Demo"
              onPress={() => {
                this.props.navigation.navigate('sqlite');
              }}
            />
          </View>
          <View style={styles.rootView}>
            <Button
              color="black"
              title="Go to Biometrics Demo"
              onPress={() => {
                this.props.navigation.navigate('biometrics');
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
