import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_URL } from '../config';
import { ReplaySubject } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class Service {
    devices: ReplaySubject<any> = new ReplaySubject();
    channels: ReplaySubject<any> = new ReplaySubject();
    tvs: ReplaySubject<any> = new ReplaySubject();

    constructor(private http: Http) {
        this.GetPIs();
        this.GetChannels();
        this.GetTVs();
    }   

    GetPIs() {
        this.http.get(API_URL + '/pis').map(res => res.json()).subscribe(res => this.devices.next(res));
    }

    GetChannels() {
        this.http.get(API_URL + '/channel').map(res => res.json()).subscribe(res => this.channels.next(res));
    }

    AddChannel(piId: string, channelId: number, channelName: string) {
        return this.http.post(API_URL + 'channel', { 
            piId: piId, 
            channelId: channelId, 
            channelName: channelName
        }).map(res => {
            res.json();
            this.GetChannels();
        });
    }

    GetTVs() {
        this.http.get(API_URL + '/tvs').map(res => res.json()).subscribe(res => this.tvs.next(res));
    }

    ChangeTV(piId: string, tvId: number) {
        return this.http.put(API_URL + '/pis/tv', {
            piId: piId,
            tvId: tvId
        }).map(res => {
            res.json();
            this.GetTVs();
        });
    }


}
