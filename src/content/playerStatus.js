const playerStatus = {
  inventory: [],
  skills: [],
  health: 100, // max 100
  fatigue: 0, // max 15
  hunger: 0, // max 15
  thirst: 0, // max 10
  location: '',
};

const inventoryCapacity = 15;

const statusLethalValues = {
  health: 0,
  fatigue: 15,
  hunger: 15,
  thirst: 10,
};

const statusMinValues = {
  health: 100,
  fatigue: 0,
  hunger: 0,
  thirst: 0,
};

export {
  playerStatus, statusLethalValues, statusMinValues, inventoryCapacity,
};
