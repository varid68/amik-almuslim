import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { RestApiProvider } from '../providers/rest-api/rest-api';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Market } from '@ionic-native/market';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { OneSignal } from '@ionic-native/onesignal';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCq_UE61FHK6LZysjv4G1XJ9qO3oRfoC4g",
  authDomain: "amik-fdde1.firebaseapp.com",
  databaseURL: "https://amik-fdde1.firebaseio.com",
  projectId: "amik-fdde1",
  storageBucket: "amik-fdde1.appspot.com",
  messagingSenderId: "198277777552"
};


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Market,
    SocialSharing,
    PhotoViewer,
    GooglePlus,
    Keyboard,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider,
  ]
})
export class AppModule {}
