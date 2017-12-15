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

  obterBeneficio(beneficios: string[]) {
    if(beneficios) {
        return beneficios[0];
    }
    return '';
  }

  obterFoto(fotos: string[]) {
    if(fotos) {
      return fotos[0];
    }
    return '';
  }

  itemSelected(item: string) {
    console.log('Troca selecionada', item);
    this.navCtrl.push(DetalhesDaTroca,{
      item: item
    });
  }
}
