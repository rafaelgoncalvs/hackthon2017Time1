import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-detalhes-da-troca',
    templateUrl: 'detalhesDaTroca.html'
  })

export class DetalhesDaTroca {
    public troca: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.troca = navParams.get('item');
    }
}