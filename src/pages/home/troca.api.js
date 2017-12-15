export class TrocaApi {
  trocas = [
    {
      'id': 6865,
      'necessidade': 'Pintura da quadra de esportes',
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
    }
  ];

  obter() {
    return trocas;
  }
}
