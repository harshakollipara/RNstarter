module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    transformIgnorePatterns: [
      "node_modules/(?!(react-native"
        + "|react-navigation-tabs"
        + "|react-native-splash-screen"
        + "|jail-monkey"
        + '|react-native-touch-id'
        + "|react-native-reanimated"
        +"|react-native-firebase"
      + ")/)",
    ],
      setupFilesAfterEnv: [
          './__mocks__/mockFirebase.js',
          './__mocks__/mockSqlite.js',
          './__mocks__/RNDefaultPreference.js',
          './__mocks__/RNUserDefaultsIOS.js',
          '<rootDir>/setup-tests.js'
        ],
  };