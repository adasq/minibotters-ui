import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { AddComponent } from '../pages/about/add/add.component';
import { DetailsPage } from '../pages/about/details/details';
import { AddWordPage } from '../pages/about/add/word/add-word';
import { SlideComponent } from '../pages/about/slide/slide.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PlayerPage } from '../pages/player/player';

import { ListTroopersPage } from '../pages/list/troopers/troopers';
import { ListTroopersEditPage } from '../pages/list/troopers/edit/edit';
import { ListTroopersAddPage } from '../pages/list/troopers/add/add';
import { ListTroopersImportPage } from '../pages/list/troopers/import/import';

import { ListSettingsPage } from '../pages/list/settings/settings';
import { ListNewPage } from '../pages/list/new/new';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ReportComponent } from './report/report.component';
import { ListsService } from './lists/lists.service';
import { TrooperService } from './trooper/trooper.service';

import { TrooperEditComponent } from './trooper/edit/edit.component';
import { ListEditComponent } from './lists/edit/edit.component';


import { Clipboard } from '@ionic-native/clipboard';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AdMobFree } from '@ionic-native/admob-free';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'f0adb118'
  }
};
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailsPage,
    AddWordPage,
    ContactPage,
    HomePage,
    PlayerPage,
    ListTroopersPage,
    ListTroopersEditPage,
    ListTroopersAddPage,
    ListTroopersImportPage,
    ListSettingsPage,
    ListNewPage,
    ReportComponent,
    SlideComponent,
    TrooperEditComponent,
    ListEditComponent,
    AddComponent
  ],
  imports: [
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBMdOMVo07PvnJ_kxxSDak7Fllyo07nWDk',
      databaseURL: 'https://mini-3963a.firebaseio.com/',
      projectId: 'mini-3963a',
    }, 'my-app'),
    AngularFireDatabaseModule,
    HttpModule,
    BrowserModule,
    GLIonic2EnvConfigurationModule,
    CloudModule.forRoot(cloudSettings),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AddComponent,
    MyApp,
    AboutPage,
    DetailsPage,
    AddWordPage,
    ContactPage,
    ListTroopersPage,
    ListTroopersEditPage,
    ListTroopersAddPage,
    ListTroopersImportPage,
    ListSettingsPage,
    ListNewPage,
    HomePage,
    PlayerPage
  ],
  providers: [
    BarcodeScanner,
    AdMobFree,
    TrooperService,
    AppService,
    ListsService,
    StatusBar,
    SplashScreen,
    Clipboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
