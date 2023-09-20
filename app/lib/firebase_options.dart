// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyBZP7kCDe0aoEJMLP7UM0TWYUIbcqpjH5Q',
    appId: '1:51356535439:web:7d67abc41e8ce5eccb3efa',
    messagingSenderId: '51356535439',
    projectId: 'sihdata-5b811',
    authDomain: 'sihdata-5b811.firebaseapp.com',
    storageBucket: 'sihdata-5b811.appspot.com',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyD35CyokDkGjetbo8dkGDj9fdtzcjTsv4o',
    appId: '1:51356535439:android:b81c89173394c683cb3efa',
    messagingSenderId: '51356535439',
    projectId: 'sihdata-5b811',
    storageBucket: 'sihdata-5b811.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyCESWJ47X-iH3bC7BpE-OvhwDu8yNx-__A',
    appId: '1:51356535439:ios:1f46fcc915453b54cb3efa',
    messagingSenderId: '51356535439',
    projectId: 'sihdata-5b811',
    storageBucket: 'sihdata-5b811.appspot.com',
    iosBundleId: 'com.example.app',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyCESWJ47X-iH3bC7BpE-OvhwDu8yNx-__A',
    appId: '1:51356535439:ios:bf5d6e4149517677cb3efa',
    messagingSenderId: '51356535439',
    projectId: 'sihdata-5b811',
    storageBucket: 'sihdata-5b811.appspot.com',
    iosBundleId: 'com.example.app.RunnerTests',
  );
}
