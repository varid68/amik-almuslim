var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCq_UE61FHK6LZysjv4G1XJ9qO3oRfoC4g",
    authDomain: "amik-fdde1.firebaseapp.com",
    databaseURL: "https://amik-fdde1.firebaseio.com",
    projectId: "amik-fdde1",
    storageBucket: "amik-fdde1.appspot.com",
    messagingSenderId: "198277777552"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            RestApiProvider,
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map