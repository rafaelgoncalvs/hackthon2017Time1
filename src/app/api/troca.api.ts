
export class TrocaApi {

  obter() {
    return [
      {
        'id': 6865,
        'necessidade': 'Pintura da quadra de esportes',
        'condicoes': ['Tem que ser feito nas férias', 'Tinta de primeira'],
        'tipo': ['Material', 'Mão de obra'],
        'solicitante': {
            'id': 1,
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
        'id': 456,
        'necessidade': 'Conserto de bebedouro',
        'condicoes': ['Tem que ser logo'],
        'tipo': ['Mão de obra'],
        'solicitante': {
            'id': 2,
            'nome': 'APM da Escola Eusébio da Silveira',
        },
        'befecicios': ['Água gelada por um mês'],
        'local': {
          'endereco': 'Rua das Garças, 368, Campo Grande - MS'
        },
        'distancia': '356m',
        'fotos': [
          'localhost:8080/foto3',
          'localhost:8080/foto4'
        ]
      },
      {
        'id': 237,
        'necessidade': 'Aquisição de ar condicionado para alunos 2º ANO B',
        'condicoes': ['Tem que ser logo'],
        'tipo': ['Instalação', 'Rateio da compra'],
        'solicitante': {
            'id': 3,
            'nome': 'APM da Escola Eusébio da Silveira',
        },
        'befecicios': ['Água gelada por um mês'],
        'local': {
          'endereco': 'Rua das Garças, 368, Campo Grande - MS'
        },
        'distancia': '356m',
        'fotos': [
          'localhost:8080/foto3',
          'localhost:8080/foto4'
        ]
      }
    ];
  }
}