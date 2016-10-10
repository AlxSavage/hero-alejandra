App.info({
  name: 'Traveler',
  description: 'Traveler app',
  author: 'Hero Group',
  version: '0.0.1'
});

App.icons({
  'iphone_2x': 'resources/icons/icon-120x120.png',
  'iphone_3x': 'resources/icons/icon-180x180.png',
  'ipad': 'resources/icons/icon-76x76.png',
  'ipad_2x': 'resources/icons/icon-152x152.png',
  'ipad_pro': 'resources/icons/icon-167x167.png',
  'ios_settings': 'resources/icons/icon-29x29.png',
  'ios_settings_2x': 'resources/icons/icon-58x58.png',
  'ios_settings_3x': 'resources/icons/icon-87x87.png',
  'ios_spotlight': 'resources/icons/icon-40x40.png',
  'ios_spotlight_2x': 'resources/icons/icon-80x80.png',
  'android_mdpi': 'resources/icons/icon-48x48.png',
  'android_hdpi': 'resources/icons/icon-72x72.png',
  'android_xhdpi': 'resources/icons/icon-96x96.png',
  'android_xxhdpi': 'resources/icons/icon-144x144.png',
  'android_xxxhdpi': 'resources/icons/icon-192x192.png'  
});

App.launchScreens({
  'iphone_2x': 'resources/splash/splash-640x960.png',
  'iphone5': 'resources/splash/splash-640x1136.png',
  'iphone6': 'resources/splash/splash-750x1334.png',
  'iphone6p_portrait': 'resources/splash/splash-1242x2208.png',
  'iphone6p_landscape': 'resources/splash/splash-2208x1242.png',
  'ipad_portrait': 'resources/splash/splash-768x1024.png',
  'ipad_portrait_2x': 'resources/splash/splash-1536x2048.png',
  'ipad_landscape': 'resources/splash/splash-1024x768.png',
  'ipad_landscape_2x': 'resources/splash/splash-2048x1536.png',
  'android_mdpi_portrait': 'resources/splash/splash-320x470.png',
  'android_mdpi_landscape': 'resources/splash/splash-470x320.png',
  'android_hdpi_portrait': 'resources/splash/splash-480x640.png',
  'android_hdpi_landscape': 'resources/splash/splash-640x480.png',
  'android_xhdpi_portrait': 'resources/splash/splash-720x960.png',
  'android_xhdpi_landscape': 'resources/splash/splash-960x720.png',
  'android_xxhdpi_portrait': 'resources/splash/splash-1080x1440.png',
  'android_xxhdpi_landscape': 'resources/splash/splash-1440x1080.png'
});

App.setPreference('BackgroundColor', '0x00000000');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('AutoHideSplashScreen', true); // Temp setting for iOS 10 testing
App.setPreference('WebAppStartupTimeout', 120000); // Temp setting for iOS 10 testing

// see https://guide.meteor.com/mobile.html#accessing-local-files
App.accessRule('data:*', { type: 'navigation' });
// see https://cordova.apache.org/docs/en/dev/config_ref/index.html#preference
App.setPreference('Orientation', 'portrait');
App.setPreference('Orientation', 'portrait', 'ios');
App.setPreference('DisallowOverscroll', true);
App.setPreference('Fullscreen', true);
// see https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-statusbar/
// see http://devgirl.org/2014/07/31/phonegap-developers-guid/
App.setPreference('StatusBarOverlaysWebView', true);
App.setPreference('BackupWebStorage', 'local');
// App.setPreference('StatusBarBackgroundColor', '#1A1C21');
App.setPreference('StatusBarStyle', 'lightcontent');

// iOS only preferences
App.setPreference('EnableViewportScale', false);
App.setPreference('KeyboardDisplayRequiresUserAction', false);
App.setPreference('MediaPlaybackRequiresUserAction', false);
App.setPreference('AllowInlineMediaPlayback', true);
App.setPreference('SuppressesIncrementalRendering', true);

// for later
// App.configurePlugin('cordova-plugin-camera-preview');
// App.configurePlugin('cordova-plugin-backgroundvideo');