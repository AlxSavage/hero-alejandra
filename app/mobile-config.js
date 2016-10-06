App.info({
  name: 'app',
  description: 'Traveler app',
  author: 'Hero Group',
  version: '1.0'
  });

App.icons({
  'iphone': 'public/favicon-32x32.png',
  'iphone_2x': 'public/apple-touch-icon.png',
});

App.setPreference('BackgroundColor', '0x00000000');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('AutoHideSplashScreen', true); // Temp setting for iOS 10 testing
App.setPreference('WebAppStartupTimeout', 120000); // Temp setting for iOS 10 testing