export const RESTAURANTS = [
  {
    id: '1',
    name: 'Tô de boa',
    description: 'Maior restaurante do Recife, fazemos os melhores lanches da região.',
    address: {
      city: 'Recife',
      street: 'Casa Amarela'
    },
    imgUrl: '../assets/restaurantImg.png',
    openingHours: {
      weekdays: [
        { day: 'Segunda à Sexta', opensAt: '11:30', closesAt: '23:00' },
      ],
      saturday: [
        { day: 'Sábado', opensAt: '18:30', closesAt: '22:00' },
      ],
      sunday: [
        { day: 'Domingo', opensAt: '20:30', closesAt: '00:00' },
      ],
    },
    foodsList: [
      {
        id: '1',
        type: 'lunch',
        name: 'Parmegiana',
        description: 'Parmegiana deliciosa que serve até 2 pessoas. Acompanha arroz e batata fritas.',
        foodImg: '/assets/foodImg.png',
        value: '39.90',
        inPromotion: true,
        valueWDiscount: '29.99'
      },
      {
        id: '2',
        type: 'lunch',
        name: 'Hamburguer da Casa',
        description: 'Pão, 180g de carne, queijo cheddar, salada e nosso delicioso molho.',
        foodImg: '../assets/foodImg.png',
        value: '19.90',
        inPromotion: true,
        valueWDiscount: '17.99'
      },
      {
        id: '3',
        type: 'lunch',
        name: 'Frango Grelhado',
        description: 'Frango grelhado com temperos especiais, servido com arroz e legumes.',
        foodImg: '../assets/foodImg.png',
        value: '25.90',
        inPromotion: false,
        valueWDiscount: '25.90'
      },
      {
        id: '4',
        type: 'drink',
        name: 'Coca-cola',
        description: 'Coca cola gelada.',
        foodImg: '../assets/foodImg.png',
        value: '4.50',
        inPromotion: true,
        valueWDiscount: '3.99'
      },
      {
        id: '5',
        type: 'drink',
        name: 'Suco de Laranja',
        description: 'Suco natural de laranja, refrescante e delicioso.',
        foodImg: '../assets/foodImg.png',
        value: '5.90',
        inPromotion: false,
        valueWDiscount: '5.90'
      },
      {
        id: '6',
        type: 'dessert',
        name: 'Pudim',
        description: 'Pudim de leite condensado caseiro.',
        foodImg: '../assets/foodImg.png',
        value: '9.90',
        inPromotion: false,
        valueWDiscount: '9.90'
      },
      // Adicione mais itens de menu conforme necessário...
    ]
  },
  // Restaurantes adicionais
  {
    id: '2',
    name: 'Famiglia Italiana',
    description: 'Tradicional restaurante italiano, com pratos autênticos e ambiente acolhedor.',
    address: {
      city: 'Recife',
      street: 'Boa Viagem'
    },
    imgUrl: '../assets/famiglia-italiana.png',
    openingHours: {
      weekdays: [
        { day: 'Segunda à Sexta', opensAt: '08:00', closesAt: '12:00' },
      ],
      saturday: [
        { day: 'Sábado', opensAt: '12:00', closesAt: '23:00' },
      ],
      sunday: [
        { day: 'Domingo', opensAt: '13:00', closesAt: '21:00' },
      ],
    },
    foodsList: [
      {
        id: '1',
        type: 'lunch',
        name: 'Pizza Margherita',
        description: 'Pizza clássica com molho de tomate, muçarela fresca e manjericão.',
        foodImg: '../assets/foodImg.png',
        value: '29.90',
        inPromotion: false,
        valueWDiscount: '29.90'
      },
      {
        id: '2',
        type: 'lunch',
        name: 'Risoto de Funghi',
        description: 'Risoto cremoso com cogumelos porcini e queijo parmesão.',
        foodImg: '../assets/foodImg.png',
        value: '39.90',
        inPromotion: false,
        valueWDiscount: '39.90'
      },
      {
        id: '3',
        type: 'drink',
        name: 'Vinho Tinto',
        description: 'Vinho tinto italiano da região de Toscana, encorpado e aromático.',
        foodImg: '../assets/foodImg.png',
        value: '89.90',
        inPromotion: false,
        valueWDiscount: '89.90'
      },
      // Adicione mais itens de menu conforme necessário...
    ]
  },
  {
    id: '3',
    name: 'Grelhados do Sul',
    description: 'Churrascaria especializada em cortes nobres de carne, preparados na brasa.',
    address: {
      city: 'Recife',
      street: 'Pina'
    },
    imgUrl: '../assets/grelhados-do-sul.png',
    openingHours: {
      weekdays: [
        { day: 'Segunda à Sexta', opensAt: '11:30', closesAt: '22:00' },
      ],
      saturday: [
        { day: 'Sábado', opensAt: '12:00', closesAt: '23:00' },
      ],
      sunday: [
        { day: 'Domingo', opensAt: '13:00', closesAt: '21:00' },
      ],
    },
    foodsList: [
      {
        id: '1',
        type: 'lunch',
        name: 'Picanha',
        description: 'Picanha suculenta, servida com farofa, vinagrete e arroz branco.',
        foodImg: '../assets/foodImg.png',
        value: '59.90',
        inPromotion: false,
        valueWDiscount: '59.90'
      },
      {
        id: '2',
        type: 'lunch',
        name: 'Costela de Porco',
        description: 'Costela de porco assada lentamente, com molho barbecue especial.',
        foodImg: '../assets/foodImg.png',
        value: '49.90',
        inPromotion: false,
        valueWDiscount: '49.90'
      },
      {
        id: '3',
        type: 'drink',
        name: 'Caipirinha de Morango',
        description: 'Caipirinha refrescante com morangos frescos e cachaça de qualidade.',
        foodImg: '../assets/foodImg.png',
        value: '14.90',
        inPromotion: false,
        valueWDiscount: '14.90'
      },
      // Adicione mais itens de menu conforme necessário...
    ]
  },
  {
    id: '4',
    name: 'Vegetariano Saudável',
    description: 'Restaurante especializado em pratos vegetarianos saudáveis e saborosos.',
    address: {
      city: 'Recife',
      street: 'Boa Vista'
    },
    imgUrl: '../assets/vegetariano-saudavel.png',
    openingHours: {
      weekdays: [
        { day: 'Segunda à Sexta', opensAt: '11:00', closesAt: '22:00' },
      ],
      saturday: [
        { day: 'Sábado', opensAt: '12:00', closesAt: '20:00' },
      ],
      sunday: [
        { day: 'Domingo', opensAt: '12:30', closesAt: '19:00' },
      ],
    },
    foodsList: [
      {
        id: '1',
        type: 'lunch',
        name: 'Falafel com Homus',
        description: 'Bolinhos de grão de bico temperados, acompanhados de homus de grão de bico.',
        foodImg: '../assets/foodImg.png',
        value: '19.90',
        inPromotion: false,
        valueWDiscount: '19.90'
      },
      {
        id: '2',
        type: 'lunch',
        name: 'Quibe de Abóbora',
        description: 'Quibe assado de abóbora com recheio de ricota e ervas finas.',
        foodImg: '../assets/foodImg.png',
        value: '24.90',
        inPromotion: false,
        valueWDiscount: '24.90'
      },
      {
        id: '3',
        type: 'drink',
        name: 'Suco Detox',
        description: 'Suco natural de frutas verdes e vegetais, rico em antioxidantes e vitaminas.',
        foodImg: '../assets/foodImg.png',
        value: '8.90',
        inPromotion: true,
        valueWDiscount: '7.90'
      },
      // Adicione mais itens de menu conforme necessário...
    ]
  },
  {
    id: '5',
    name: 'Sabor do Oriente',
    description: 'Restaurante de culinária árabe com pratos tradicionais e atmosfera acolhedora.',
    address: {
      city: 'Recife',
      street: 'Boa Viagem'
    },
    imgUrl: '../assets/sabor-do-oriente.png',
    openingHours: {
      weekdays: [
        { day: 'Segunda à Sexta', opensAt: '12:00', closesAt: '16:00' },
      ],
      saturday: [
        { day: 'Sábado', opensAt: '12:00', closesAt: '00:00' },
      ],
      sunday: [
        { day: 'Domingo', opensAt: '13:00', closesAt: '22:00' },
      ],
    },
    foodsList: [
      {
        id: '1',
        type: 'lunch',
        name: 'Kafta',
        description: 'Kafta grelhada temperada com especiarias árabes, acompanhada de arroz e coalhada.',
        foodImg: '../assets/foodImg.png',
        value: '34.90',
        inPromotion: false,
        valueWDiscount: '34.90'
      },
      {
        id: '2',
        type: 'lunch',
        name: 'Esfiha de Carne',
        description: 'Esfiha aberta de carne moída temperada, assada no forno a lenha.',
        foodImg: '../assets/foodImg.png',
        value: '3.50',
        inPromotion: false,
        valueWDiscount: '3.50'
      },
      {
        id: '3',
        type: 'drink',
        name: 'Chá de Hortelã',
        description: 'Chá quente de hortelã fresca, perfumado e revigorante.',
        foodImg: '../assets/foodImg.png',
        value: '6.90',
        inPromotion: true,
        valueWDiscount: '5.90'
      },
      // Adicione mais itens de menu conforme necessário...
    ]
  },
  // Adicione mais restaurantes aqui...
];
