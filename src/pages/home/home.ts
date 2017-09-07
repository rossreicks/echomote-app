import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isBluetooth: boolean = false;

  private devices: any = [];
  constructor(public navCtrl: NavController,
    private bluetooth: BluetoothSerial,
    private platform: Platform) {
    platform.ready().then(() => {
      bluetooth.isEnabled().then(function() {
          this.isBluetooth = true;
      },
      function() {
          this.isBluetooth = false;
      });
      bluetooth.list().then(res => this.devices = res);
    })
  }

}
