import { getDomElement } from './getDomElement';
import { options } from './domElements';
import {effects} from '../content/effects';

const renderOption = (action) => {
  const option = getDomElement('span', action.actionDescription);
  option.classList.add('game-holder__option', 'button');
  option.addEventListener('click', () => {
    action.effects.forEach((effect) => {
      effects[effect.type](effect.payload);
    });
  });
  options.appendChild(option);
};

export { renderOption };
