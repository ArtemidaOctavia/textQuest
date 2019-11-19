import { getDomElement } from './getDomElement';
import { effects } from '../content/effects';
import { inventoryHolder } from './domElements';
import { inventoryCounter } from './inventoryCounter';

const setItem = (item) => {
  const itemHolder = getDomElement('div', '', item.id, '', 'inventory-item');
  const cross = getDomElement('div', 'X', '', '', 'inventory-item-cross');
  cross.addEventListener('click', () => {
    document.getElementById(item.id).remove();
  });
  itemHolder.appendChild(cross);
  const img = getDomElement('img', '', '', item.src, 'inventory-item-picture');
  itemHolder.appendChild(img);
  itemHolder.appendChild(getDomElement('div', item.name, '', '', 'inventory-item-name'));
  inventoryHolder.appendChild(itemHolder);
  img.addEventListener('click', () => {
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
