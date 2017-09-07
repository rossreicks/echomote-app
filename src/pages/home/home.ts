import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isBluetooth: boolean = false;
  public statusString: string = '';
  public settings;

  private devices: any = [];
  constructor(public navCtrl: NavController,
    private bluetooth: BLE,
    private platform: Platform) {
  }

  ngOnInit() {
    this.bluetooth.isEnabled().then(() => this.isBluetooth = true,() => this.isBluetooth = false);
    //this.bluetooth.startScan([]).subscribe(device => this.devices.push(device));
    //this.bluetooth.showBluetoothSettings().then(res => this.settings = res);
  }

}
