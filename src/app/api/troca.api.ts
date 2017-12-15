
export class TrocaApi {

  obter() {
    return [
      {
        id: 6865,
        necessidade: 'Pintura da quadra de esportes',
        condicoes: ['Tem que ser feito nas férias', 'Tinta de primeira'],
        tipo: ['Material', 'Mão de obra'],
        solicitante: {
            id: 1,
            nome: 'E.M. Domingos G. Gomes',
        },
        beneficios: ['Utilizar a quadra de esportes de noite durante 6 meses', 'Agradecimento público da escola', 'Placa com a sua marca na quadra'],
        local: {
          'endereco': 'Rua das Garças, 368, Campo Grande - MS'
        },
        distancia: '120m',
        fotos: [
          {url: 'assets/imgs/foto1.jpg', principal: true},
          {url: 'assets/imgs/foto2.jpg', principal: false}
        ]
      },
      {
        id: 456,
        necessidade: 'Conserto de bebedouro',
        condicoes: ['Tem que ser logo'],
        tipo: ['Mão de obra'],
        solicitante: {
            id: 2,
            nome: 'APM da Escola Eusébio da Silveira',
        },
        beneficios: ['Água gelada por um mês'],
        local: {
          endereco: 'Rua das Garças, 368, Campo Grande - MS'
        },
        distancia: '356m',
        fotos: [
          {url: 'assets/imgs/foto1.jpg', principal: false},
          {url: 'assets/imgs/foto2.jpg', principal: true}
        ]
      },
      {
        id: 237,
        necessidade: 'Aquisição de ar condicionado para alunos 2º ANO B',
        condicoes: ['Tem que ser logo'],
        tipo: ['Instalação', 'Rateio da compra'],
        solicitante: {
            id: 3,
            nome: 'APM da Escola Eusébio da Silveira',
        },
        beneficios: ['Água gelada por um mês'],
        local: {
          endereco: 'Rua das Garças, 368, Campo Grande - MS'
        },
        distancia: '356m',
        fotos: [
          {url: 'assets/imgs/foto3.jpg', principal: true},
          {url: 'assets/imgs/foto2.jpg', principal: false}
        ]
      }
    ];
  }
}
