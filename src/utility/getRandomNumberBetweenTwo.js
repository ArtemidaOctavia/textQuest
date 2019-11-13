const getRandomNumberBetweenTwo = (min = 1, max = 20) => Math.floor(min + Math.random() * (max + 1 - min));

export { getRandomNumberBetweenTwo };
