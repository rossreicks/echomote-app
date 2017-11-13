import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Service } from '../service';
import { DevicesPage } from '../device-list/devices';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
  styles: [
    `.splash-screen {
      align-items: center;
      justify-content: center;
      background-color: white;
      flex-direction: column;
      height: 100%;
    }`
  ]
})
export class DiscoveryPage {
  splash = true;
  header: any;
  content: any;

  constructor(public navCtrl: NavController,
    private platform: Platform,
    public statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    this.header = document.getElementsByClassName('header')[1];
    this.content = document.getElementsByClassName('content')[1];
    this.header.style.display = "none";
    this.content.style.display = 'none';
    setTimeout(() => {
      this.splash = false;

      this.content.style.display = 'block';
      this.header.style.display = 'flex';
      for(let child = 0; child < this.content.children.length; child++) {
        this.content.children.item(child).style.marginTop = "44px";
      }
    }, 4000)
  }

  GoToDevices() {
    this.navCtrl.push(DevicesPage);
  }
}
