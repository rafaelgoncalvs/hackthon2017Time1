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

  pesquisar(ev: any) {
    let val = ev.target.value;
  }

  itemSelected(item: string) {
    console.log('Troca selecionada', item);
    this.navCtrl.push(DetalhesDaTroca,{
      item: item
    });
  }
}
