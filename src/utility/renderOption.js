import {getDomElement} from "./getDomElement";

const renderOption = function (action) {
    const option = getDomElement('li', action.actionDescription);
    option.classList.add('option');
    option.addEventListener('click', function(){
        action.effects.forEach(function (effect) {
            effect.type(effect.payload);
        })
    });
    options.appendChild(option);
};

export {renderOption}