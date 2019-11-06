const items = {
  apple: {
    name: 'Сытное яблочко',
    id: 'apple',
    src: 'https://i.ibb.co/K7D7Jjn/apple.jpg',
    consumable: true,
    effects: {
      changeNeeds: [0, 0, -2, 0],
    },
  },
  food: {
    name: 'Вкуснейший супец',
    id: 'food',
    src: 'https://i.ibb.co/H7bqV3R/food.jpg',
    consumable: true,
    effects: {
      changeNeeds: [0, 0, -2, 0],
    },
  },
  mushroom: {
    name: 'Съедобный грибочек',
    id: 'mushroom',
    src: 'https://i.ibb.co/1LZgZbn/mushroom.jpg',
    consumable: true,
    effects: {
      changeNeeds: [0, 0, -2, 0],
    },
  },
  hazelnut: {
    name: 'Лесной орешек',
    id: 'hazelnut',
    src: 'https://i.ibb.co/b3jmR3k/hazelnut.jpg',
    consumable: true,
    effects: {
      changeNeeds: [0, 0, -2, 0],
    },
  },
  fullBottle: {
    name: 'Полная бутылка',
    id: 'fullBottle',
    src: 'https://i.ibb.co/NV2zCNr/full-Bottle.jpg',
    cannotBeAttainedRandomly: true,
    consumable: true,
    effects: {
      changeNeeds: [0, -1, 0, -2],
    },
  },
  emptyBottle: {
    name: 'Пустая бутылка',
    id: 'emptyBottle',
    src: 'https://i.ibb.co/pvKYzJR/empty-Bottle.jpg',
    consumable: true,
    effects: {
      getItem: [1, 'fullBottle'],
      changeNeeds: [0, 2, 0, 1],
    },
  },
};
export { items };
