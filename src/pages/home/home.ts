import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.trocas = this.obterAsTrocas();
    
  }

  pesquisar(ev: any) {
    let val = ev.target.value;
  }

  itemSelected(item: string) {
    console.log("Troca selecionada", item);
  }

  obterAsTrocas() {
    return [
      {
        'id': 6865,
        'necessidade': 'Pintura da quadra de esportes.',
        'condicoes': ['Tem que ser feito nas férias', 'Tinta de primeira'],
        'tipo': ['Material', 'Mão de obra'],
        'solicitante': {
          'id': 61554,
          'nome': 'E.M. Domingos G. Gomes',
        },
        'befecicios': ['Utilizar a quadra de esportes de noite durante 6 meses', 'Agradecimento público da escola', 'Placa com a sua marca na quadra'],
        'local': {
          'endereco': 'Rua das Garças, 368, Campo Grande - MS'
        },
        'distancia': '120m',
        'fotos': [
          'localhost:8080/foto1',
          'localhost:8080/foto2'
        ]
      },
      {
        'id': 15651,
        'necessidade': 'Limpeza das paredes.',
        'condicoes': ['Todas as paredes da UPA deveram estar limpas.'],
        'tipo': ['Mão de obra'],
        'solicitante': {
          'id': 6185,
          'nome': 'UPA Antônio Maria Coelho',
        },
        'befecicios': ['Utilizar o estacionamento da UPA durante a noite.'],
        'local': {
          'endereco': 'Rua Antônio Maria Coelho, 892, Campo Grande - MS'
        },
        'distancia': '1Km',
        'fotos': [
          'localhost:8080/foto1',
          'localhost:8080/foto2',
          'localhost:8080/foto3'
        ]
      }
    ]
  }
}
