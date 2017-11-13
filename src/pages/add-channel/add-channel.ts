import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Service } from '../service';

@Component({
  selector: 'page-add-channel',
  templateUrl: 'add-channel.html',
})
export class AddChannelPage {
    device: any;

  constructor(private viewCtrl: ViewController, navParams: NavParams) {
      this.device = navParams.get('device');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
