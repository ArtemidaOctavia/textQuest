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
    name: 'Вкуснейший супец',
    id: 'food',
    src: 'https://i.ibb.co/H7bqV3R/food.jpg',
    consumable: true,
    effects: {
      changeNeeds: { hunger: -2 },
    },
  },
  mushroom: {
    name: 'Съедобный грибочек',
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
    src: 'https://i.ibb.co/b3jmR3k/hazelnut.jpg',
    consumable: true,
    effects: {
      changeNeeds: { hunger: -2 },
    },
  },
  fullBottle: {
    name: 'Полная бутылка',
    id: 'fullBottle',
    src: 'https://i.ibb.co/NV2zCNr/full-Bottle.jpg',
    specific: true,
    consumable: true,
    effects: {
      changeNeeds: { fatigue: -1, thirst: -2 },
    },
  },
  emptyBottle: {
    name: 'Пустая бутылка',
    id: 'emptyBottle',
    src: 'https://i.ibb.co/pvKYzJR/empty-Bottle.jpg',
    consumable: true,
    effects: {
      getItems: { fullBottle: 1 },
      changeNeeds: { fatigue: 2, thirst: 1 },
    },
  },
  roach: {
    name: 'Плотва',
    id: 'roach',
    src: 'http://www.fishinginireland.info/images/coarse/roach.jpg',
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
