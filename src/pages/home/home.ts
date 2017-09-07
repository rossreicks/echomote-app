import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isBluetooth: boolean = false;

  private devices: any = [];
  constructor(public navCtrl: NavController, bluetooth: BluetoothSerial) {
    bluetooth.isEnabled().then(blue => this.isBluetooth = blue);

    bluetooth.discoverUnpaired().then(res => this.devices = res);
  }

}
