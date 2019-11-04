import {getDomElement} from "./getDomElement";
import {options} from "./domElements";
import {effects} from "../content/effects";

const renderOption = function (action) {
    const option = getDomElement('li', action.actionDescription);
    option.classList.add('option');
    option.addEventListener('click', function(){
        action.effects.forEach(function (effect) {
            effects[effect['type']](effect.payload);
        })
    });
    options.appendChild(option);
};

export {renderOption}