const playerStatus = {
  inventory: [],
  skills: [],
  damage: 0, // max 100
  fatigue: 0, // max 15
  hunger: 0, // max 15
  thirst: 0, // max 10
  location: '',
};

const inventoryCapacity = 15;

const statusLethalValues = {
  damage: 100,
  fatigue: 15,
  hunger: 15,
  thirst: 10,
};

const statusMinValues = {
  damage: 0,
  fatigue: 0,
  hunger: 0,
  thirst: 0,
};

export {
  playerStatus, statusLethalValues, statusMinValues, inventoryCapacity,
};
