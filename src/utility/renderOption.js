import {getDomElement} from "./getDomElement";
import {options} from "./domElements";
import {effects} from "../content/effects";

const renderOption = (action) => {
    const option = getDomElement('li', action.actionDescription);
    option.classList.add('option');
    option.addEventListener('click', () => {
        action.effects.forEach((effect) => {
            effects[effect['type']](effect.payload);
        })
    });
    options.appendChild(option);
};

export {renderOption}