import firebase from 'react-native-firebase';

export default class FirebaseService {
  private analytics = firebase.analytics();

  public enableAnalytics(isEnable: boolean) {
    this.analytics.setAnalyticsCollectionEnabled(isEnable);
  }

  public setUserId(userId: string) {
    this.analytics.setUserId(userId);
  }

  public setCurrentScreen(screenName: string) {
    this.analytics.setCurrentScreen(screenName);
  }

  // Sets the minimum engagement time required before starting a session. The default value is 10000 (10 seconds).
  public setMinimumSessionDuration(sessionDuration: number) {
    this.analytics.setMinimumSessionDuration(sessionDuration);
  }

  public signUpMethodType(type: string) {
    this.analytics.setUserProperty('signup-type', type);
  }

  // Is user free or paid
  public setUserMembership(type: string) {
    this.analytics.setUserProperty('membership-type', type);
  }

  public openApp(appId: string) {
    this.analytics.logEvent('open-app', {
      group_Id: appId,
      time: this.getCurrentTime(),
    });
  }

  public closeApp(appId: string) {
    this.analytics.logEvent('close-app', {
      group_Id: appId,
      time: this.getCurrentTime(),
    });
  }

  public sendEvent(eventType: string, eventParams: any) {
    this.analytics.logEvent(eventType, eventParams);
  }

  private getCurrentTime() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
}
