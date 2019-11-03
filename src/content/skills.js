import {effects} from "./effects";
import {playerStatus} from "./playerStatus";
import {specialItems} from "./specialItems";
import {scenes} from "./scenes";
import {items} from "./items";
import {paramsMap} from "./paramsMap";

const skills = {
    findRiver: {
        name: 'Найти реку',
        src: 'pictures/items/compass.jpg',
        effects: {
            moveTo: 'riverScene',
            changeNeeds: [0, 1, 1, 1]
        }
    }
};
export {skills}