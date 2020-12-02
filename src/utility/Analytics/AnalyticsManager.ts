import FirebaseService from './FirebaseService';

export default class AnalyticsManager {

    public firebaseAnalyticsService: FirebaseService = new FirebaseService();

    public IntialiseAnalytics(enabled: boolean, userId: string) {
        this.firebaseAnalyticsService.enableAnalytics(enabled);
        this.firebaseAnalyticsService.setUserId(userId);
    }

    public sendEvent(key: string, value: any) {
        this.firebaseAnalyticsService.sendEvent(key, value);
    }

    public setCurrentScreen(screen: string) {
        this.firebaseAnalyticsService.setCurrentScreen(screen);
    }
}


