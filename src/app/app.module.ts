import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

import { MyApp } from './app.component';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { DevicesPage } from '../pages/device-list/devices';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Service } from '../pages/service';
import { HttpModule } from '@angular/http';
import { DevicePage } from '../pages/device/device';
import { AddChannelPage } from '../pages/add-channel/add-channel';

@NgModule({
  declarations: [
    MyApp,
    DiscoveryPage,
    DevicesPage,
    DevicePage,
    AddChannelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoveryPage,
    DevicesPage,
    DevicePage,
    AddChannelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    Service,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
