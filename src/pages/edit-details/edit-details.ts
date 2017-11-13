import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Service } from '../service';

@Component({
  selector: 'page-edit-details',
  templateUrl: 'edit-details.html',
  styles: [
      `input {
       text-align: right;   
      }`
  ]
})
export class EditDetailsPage {
    device: any;
    tvs: any[] = [];

  constructor(private viewCtrl: ViewController, navParams: NavParams, private service: Service) {
      this.device = navParams.get('device');
      this.service.tvs.subscribe(res => this.tvs = res);
  }

  EditDetails() {
      this.service.UpdateDevice(this.device).subscribe(res => {
          this.dismiss();
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
