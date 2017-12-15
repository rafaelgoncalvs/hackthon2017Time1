import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trocas = [
    {
      'necessidade': 'Descrição da necessidade 1.'
    },
    {
      'necessidade': 'Descrição da necessidade 2.'
    },
    {
      'necessidade': 'Descrição da necessidade 3.'
    }
  ];

  constructor(public navCtrl: NavController) {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
