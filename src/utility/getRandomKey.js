const getRandomKey = (targetObject) => {
    return targetObject[Object.keys(targetObject)[Math.floor(Math.random() * Math.floor(Object.keys(targetObject).length))]];
};

export {getRandomKey}