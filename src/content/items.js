import {effects} from "./effects";
import {playerStatus} from "./playerStatus";
import {specialItems} from "./specialItems";
import {scenes} from "./scenes";
import {skills} from "./skills";
import {paramsMap} from "./paramsMap";

const items = {
    apple: {
        name: 'Сытное яблочко',
        id: 'apple',
        src: 'pictures/items/apple.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, 0, -2, 0]
        }
    },
    food : {
        name: 'Вкуснейший супец',
        id: 'food',
        src: 'pictures/items/food.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, 0, -2, 0]
        }
    },
    mushroom : {
        name: 'Съедобный грибочек',
        id: 'mushroom',
        src: 'pictures/items/mushroom.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, 0, -2, 0]
        }
    },
    hazelnut : {
        name: 'Лесной орешек',
        id: 'hazelnut',
        src: 'pictures/items/hazelnut.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, 0, -2, 0]
        }
    },
    emptyBottle: {
        name: 'Пустая бутылка',
        id: 'emptyBottle',
        src: 'pictures/items/emptyBottle.jpg',
        consumable: true,
        effects: {
            getSpecialItem: 'fullBottle',
            changeNeeds: [0, 2, 0, 1]
        }
    }
};
export {items}