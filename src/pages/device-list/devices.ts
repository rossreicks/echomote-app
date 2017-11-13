import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Service } from '../service';
import { DevicePage } from '../device/device';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  devices: any[] = [];

  constructor(private service: Service, public modalCtrl: ModalController) {
  }



  ngOnInit() {
    this.service.devices.subscribe(res => this.devices = res);
  }

  GoToDevice(event, device) {
    let modal = this.modalCtrl.create(DevicePage, {device: device});
    modal.present();
  }
}
