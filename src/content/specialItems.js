import {effects} from "./effects";
import {playerStatus} from "./playerStatus";
import {items} from "./items";
import {scenes} from "./scenes";
import {skills} from "./skills";
import {paramsMap} from "./paramsMap";

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