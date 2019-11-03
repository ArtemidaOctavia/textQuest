import {effects} from "./effects";
import {items} from "./items";
import {specialItems} from "./specialItems";
import {scenes} from "./scenes";
import {skills} from "./skills";
import {paramsMap} from "./paramsMap";

const playerStatus = {
    inventory: [],
    skills: [],
    health: 100,  //max 100
    fatigue: 0, // max 15
    hunger: 0, // max 15
    thirst: 0, // max 10
    location: ''
};

export {playerStatus}