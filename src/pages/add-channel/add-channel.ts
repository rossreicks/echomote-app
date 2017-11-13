import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Service } from '../service';

@Component({
  selector: 'page-add-channel',
  templateUrl: 'add-channel.html',
  styles: [
    `input {
     text-align: right;   
    }`
  ]
})
export class AddChannelPage {
    device: any;
    channelName: string;
    channelNumber: number;

  constructor(private viewCtrl: ViewController, navParams: NavParams, private service: Service) {
      this.device = navParams.get('device');
  }

  AddChannel() {
    this.service.AddChannel(this.device.piID, this.channelNumber, this.channelName.toUpperCase()).subscribe(res => {
        this.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
