const specialItems = {
    fullBottle: {
        name: 'Полная бутылка',
        id: 'fullBottle',
        src: 'pictures/items/fullBottle.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, -1, 0, -2]
        }
    }
};
export {specialItems};