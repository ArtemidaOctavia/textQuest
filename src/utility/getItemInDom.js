import { getDomElement } from './getDomElement';
import { effects } from '../content/effects';
import { inventoryHolder } from './domElements';

const getItemInDom = (item) => {
  const itemHolder = getDomElement('div', '', item.id, '', 'inventory-item');
  itemHolder.appendChild(getDomElement('img', '', '', item.src, 'inventory-item-picture'));
  itemHolder.appendChild(getDomElement('div', item.name, '', '', 'inventory-item-name'));
  inventoryHolder.appendChild(itemHolder);
  itemHolder.addEventListener('click', () => {
    Object.keys(item.effects).forEach((effect) => {
      effects[effect](item.effects[effect]);
    });
    if (item.consumable) {
      effects.takeAwayItems([item]);
    }
  });
};

export { getItemInDom };
