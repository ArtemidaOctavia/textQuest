import { getDomElement } from './getDomElement';
import { effects } from '../content/effects';
import { inventoryHolder } from './domElements';
import { inventoryCounter } from './inventoryCounter';

const setItem = (item) => {
  const itemHolder = getDomElement('div', '', item.id, '', 'game-holder__inventory-item');
  const cross = getDomElement('div', 'X', '', '', 'game-holder__inventory-item-cross');
  cross.addEventListener('click', () => {
    effects.takeAwayItems([item]);
  });
  itemHolder.appendChild(cross);
  itemHolder.appendChild(getDomElement('div', '', '', item.src, 'game-holder__inventory-item-picture'));
  const itemName = getDomElement('div', item.name, '', '', 'game-holder__inventory-item-name');
  itemHolder.appendChild(itemName);
  inventoryHolder.appendChild(itemHolder);
  itemName.addEventListener('click', () => {
    Object.keys(item.effects).forEach((effect) => {
      effects[effect](item.effects[effect]);
    });
    if (item.consumable) {
      effects.takeAwayItems([item]);
      inventoryCounter();
    }
  });
};

export { setItem };
