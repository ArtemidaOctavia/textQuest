const items = {
  apple: {
    name: 'Сытное яблочко',
    id: 'apple',
    src: 'https://i.ibb.co/K7D7Jjn/apple.jpg',
    consumable: true,
    effects: {
      changeNeeds: { hunger: -2 },
    },
  },
  food: {
    name: 'Вкусный супец',
    id: 'food',
    src: 'https://gotovim-doma.ru/images/recipe/e/5d/e5dbd4fc4bc3fc3a070952b04d3183c7_l.jpg',
    consumable: true,
    effects: {
      changeNeeds: { hunger: -2 },
    },
  },
  mushroom: {
    name: 'Полезный грибочек',
    id: 'mushroom',
    src: 'https://i.ibb.co/1LZgZbn/mushroom.jpg',
    consumable: true,
    effects: {
      changeNeeds: { hunger: -2 },
    },
  },
  hazelnut: {
    name: 'Лесной орешек',
    id: 'hazelnut',
    src: 'https://moskva.i-mne.com/img/p/moskva.i-mne.com/30-1701-large.jpg',
    consumable: true,
    effects: {
      changeNeeds: { hunger: -2 },
    },
  },
  fullBottle: {
    name: 'Полная бутылка',
    id: 'fullBottle',
    src: 'https://static.my-shop.ru/product/0/243/2427802_128.jpg',
    specific: true,
    consumable: true,
    effects: {
      changeNeeds: { fatigue: -1, thirst: -2 },
      getItems: { emptyBottle: 1 },
    },
  },
  emptyBottle: {
    name: 'Пустая бутылка',
    id: 'emptyBottle',
    src: 'https://images.ua.prom.st/1387367707_w128_h128_butylka-plastikovaya-100ml.jpg',
    consumable: true,
    effects: {
      getItems: { fullBottle: 1 },
      changeNeeds: { fatigue: 2, thirst: 1 },
    },
  },
  roach: {
    name: 'Плотва',
    id: 'roach',
    src: 'https://www.graycell.ru/picture/big/plotva.jpg',
    consumable: true,
    specific: true,
    effects: {
      changeNeeds: { hunger: -2 },
    },
  },
  fishingRod: {
    name: 'Удочка',
    id: 'fishingRod',
    src: 'https://i5.walmartimages.com/asr/30881e20-ce61-4778-a949-39b088fd6009_1.497868596fdf88bc6936ff4c19b3cfee.jpeg',
    effects: {
      getItems: { roach: [0, 2] },
      changeNeeds: { fatigue: 2, thirst: 1, hunger: 1 },
    },
  },
};

export { items };
