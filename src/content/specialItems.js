const specialItems = {
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
};
export { specialItems };
