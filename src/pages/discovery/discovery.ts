import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Service } from '../service';
import { DevicesPage } from '../device-list/devices';

@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html'
})
export class DiscoveryPage {
  constructor(public navCtrl: NavController,
    private platform: Platform,
    private service: Service) {
  }

  GoToDevices() {
    this.navCtrl.push(DevicesPage);
  }
}
