import { getDomElement } from './getDomElement';
import { options } from './domElements';

const renderOption = (action) => {
  const option = getDomElement('li', action.actionDescription);
  option.classList.add('option');
  options.appendChild(option);
  return option;
};

export { renderOption };
