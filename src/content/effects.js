import { playerStatus } from './playerStatus';
import { specialItems } from './specialItems';
import { skills } from './skills';
import { killChildren } from '../utility/killChildren';
import { renderScene } from '../utility/renderScene';
import { changeStatusIndicators } from '../utility/changeStatusIndicators';
import { killPlayerIfExhausted } from '../utility/killPlayerIfExhausted';
import { getRandomDirection } from '../utility/getRandomDirection';
import {
  inventoryHolder, menu, gameplayUI, skillsHolder,
} from '../utility/domElements';
import { getItemInDom } from '../utility/getItemInDom';
import { getRandomKey } from '../utility/getRandomKey';
import { items } from './items';
import { getSkillInDom } from '../utility/getSkillInDom';
import { resetStatus } from '../utility/resetStatus';

const effects = {
  getRandomItem: (quantity) => {
    for (let i = 1; i <= quantity; i += 1) {
      const item = getRandomKey(items);
      playerStatus.inventory.push(item.name);
      getItemInDom(item);
      while (playerStatus.inventory.length > 15) {
        playerStatus.inventory.pop();
        inventoryHolder.removeChild(inventoryHolder.lastChild);
      }
    }
  },
  getSpecialItem: (specialItem) => {
    const item = specialItems[specialItem];
    playerStatus.inventory.push(item.name);
    getItemInDom(item);
  },
  takeAwayItems: (itemsForTake) => {
    itemsForTake.forEach(({ name, id }) => {
      const itemIndex = playerStatus.inventory.indexOf(name);
      playerStatus.inventory.splice(itemIndex, 1);
      document.getElementById(id).remove();
    });
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
    resetStatus();
    killChildren(inventoryHolder);
    killChildren(skillsHolder);
    renderScene('woodScene');
    changeStatusIndicators();
    effects.getRandomItem(1);
    effects.getSkill('findRiver');
  },
  backToMainMenu: () => {
    menu.classList.remove('hide');
    gameplayUI.classList.add('hide');
  },
  getSkill: (skill) => {
    const target = skills[skill];
    playerStatus.skills.push(target.name);
    getSkillInDom(target);
  },
};

export { effects };
