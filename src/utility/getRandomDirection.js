const getRandomDirection = () => {
  const scenesArray = ['woodScene', 'riverScene', 'gardenScene'];
  return scenesArray[Math.floor(Math.random() * Math.floor(scenesArray.length))];
};

export { getRandomDirection };
