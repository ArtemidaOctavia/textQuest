import { playerStatus } from './playerStatus';
import { specialItems } from './specialItems';
import { skills } from './skills';
import { getDomElement } from '../utility/getDomElement';
import { killChildren } from '../utility/killChildren';
import { renderScene } from '../utility/renderScene';
import { changeStatusIndicators } from '../utility/changeStatusIndicators';
import { killPlayerIfExhausted } from '../utility/killPlayerIfExhausted';
import { getRandomDirection } from '../utility/getRandomDirection';
import {
  inventoryHolder, menu, gameplayUI, skillsHolder,
} from '../utility/domElements';
import { removeSkills } from '../utility/removeSkills';
import { getItemInDom } from '../utility/getItemInDom';
import { getRandomKey } from '../utility/getRandomKey';
import { items } from './items';

const effects = {
  getRandomItem: (quantity) => {
    for (let i = 1; i <= quantity; i += 1) {
      getItemInDom(getRandomKey(items));
      while (playerStatus.inventory.length > 15) {
        playerStatus.inventory.pop();
        inventoryHolder.removeChild(inventoryHolder.lastChild);
      }
    }
  },
  getSpecialItem: (specialItem) => {
    const item = specialItems[specialItem];
    playerStatus.inventory.push(item.name);
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
  },
  takeAwayItems: (itemsForTake) => {
    itemsForTake.forEach(({ name, id }) => {
      const itemIndex = playerStatus.inventory.indexOf(name);
      playerStatus.inventory.splice(itemIndex, 1);
      document.getElementById(id).remove();
    });
  },
  takeAwayAllItems: () => {
    playerStatus.inventory = [];
    killChildren(inventoryHolder);
  },
  moveTo: (id) => {
    renderScene(id);
  },
  changeNeeds: ([health, fatigue, hunger, thirst]) => {
    playerStatus.health += health;
    playerStatus.fatigue += fatigue;
    playerStatus.hunger += hunger;
    playerStatus.thirst += thirst;
    if (playerStatus.health >= 100) {
      playerStatus.health = 100;
    }
    if (playerStatus.fatigue <= 0) {
      playerStatus.fatigue = 0;
    }
    if (playerStatus.hunger <= 0) {
      playerStatus.hunger = 0;
    }
    if (playerStatus.thirst <= 0) {
      playerStatus.thirst = 0;
    }
    changeStatusIndicators();
    killPlayerIfExhausted();
  },
  moveForward: () => {
    renderScene(getRandomDirection());
  },
  startNewGame: () => {
    playerStatus.health = 100;
    playerStatus.fatigue = 0;
    playerStatus.hunger = 0;
    playerStatus.thirst = 0;
    changeStatusIndicators();
    removeSkills();
    effects.takeAwayAllItems();
    effects.getRandomItem(1);
    effects.getSkill('findRiver');
    renderScene('woodScene');
  },
  backToMainMenu: () => {
    menu.classList.remove('hide');
    gameplayUI.classList.add('hide');
  },
  getSkill: (skill) => {
    const target = skills[skill];
    playerStatus.skills.push(target.name);
    const skillHolder = getDomElement('div', '', '', '', 'inventory-item');
    skillHolder.appendChild(getDomElement('img', '', '', target.src, 'inventory-item-picture'));
    skillHolder.appendChild(getDomElement('div', target.name, '', '', 'inventory-item-name'));
    skillHolder.addEventListener('click', () => {
      Object.keys(target.effects).forEach((effect) => {
        effects[effect](target.effects[effect]);
      });
    });
    skillsHolder.appendChild(skillHolder);
  },
};

export { effects };
