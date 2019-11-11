const playerStatus = {
  inventory: [],
  skills: [],
  health: 100, // max 100
  fatigue: 0, // max 15
  hunger: 0, // max 15
  thirst: 0, // max 10
  location: '',
};

const statusLethalValues = {
  health: 0,
  fatigue: 15,
  hunger: 15,
  thirst: 10,
};

export { playerStatus, statusLethalValues };
