import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrocaApi } from '../../api/troca.api';

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
    console.log("Selected Item", item);
  }
}
