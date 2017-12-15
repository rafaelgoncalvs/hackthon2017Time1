import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrocaApi } from '../../app/api/troca.api';
import { DetalhesDaTroca } from '../detalhesDaTroca/detalhesDaTroca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  trocas: any;

  constructor(public navCtrl: NavController) { 
    this.trocas = new TrocaApi().obter();
  }

  itemSelected(item: string) {
    console.log('Selected Item', item);
    this.navCtrl.push(DetalhesDaTroca);
  }
}
