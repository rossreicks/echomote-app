import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Service } from '../service';
import { AddChannelPage } from '../add-channel/add-channel';
import { EditDetailsPage } from '../edit-details/edit-details';

@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
  styles: [`
    .device-info {
        margin-bottom: 10px;
    }
  `]
})
export class DevicePage {
  device: any = {};
  channels: any;
  tv: any;

  constructor(private service: Service, public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.device = navParams.get('device');
    this.service.channels.subscribe(res => this.channels = res.filter(x => x.piId == this.device.piID));
    this.service.tvs.subscribe(res => this.tv = res.filter(x => x.id == this.device.tvId)[0]);
  }

  OpenAddChannelForm() {
    let modal = this.modalCtrl.create(AddChannelPage, {device: this.device});
    modal.present();
  }

  ngOnChanges(changes) {
      console.log(changes);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  edit() {
    let modal = this.modalCtrl.create(EditDetailsPage, {device: this.device});
    modal.present();
  }
}
