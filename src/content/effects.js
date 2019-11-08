import {playerStatus, statusLethalValues} from './playerStatus';
import { skills } from './skills';
import { killChildren } from '../utility/killChildren';
import { renderScene } from '../utility/renderScene';
import { changeStatusIndicators } from '../utility/changeStatusIndicators';
import { killPlayerIfExhausted } from '../utility/killPlayerIfExhausted';
import { getRandomDirection } from '../utility/getRandomDirection';
import {
  inventoryHolder, menu, gameplayUI, skillsHolder,
} from '../utility/domElements';
import { setItem } from '../utility/setItem';
import { getRandomKey } from '../utility/getRandomKey';
import { items } from './items';
import { getSkillInDom } from '../utility/getSkillInDom';
import { resetStatus } from '../utility/resetStatus';
import {initialStatus} from "./initialStatus";

const effects = {
  getItem: ([quantity, specificItem]) => {
    for (let i = 1; i <= quantity; i += 1) {
      let item = getRandomKey(items);
      while (item.cannotBeAttainedRandomly) {
        item = getRandomKey(items);
      }
      if (specificItem) {
        item = items[specificItem];
      }
      playerStatus.inventory.push(item.name);
      setItem(item);
      while (playerStatus.inventory.length > 15) {
        playerStatus.inventory.pop();
        inventoryHolder.removeChild(inventoryHolder.lastChild);
      }
    }
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
    if (playerStatus.health >= initialStatus.health) {
      playerStatus.health = initialStatus.health;
    }
    if (playerStatus.fatigue <= initialStatus.fatigue) {
      playerStatus.fatigue = initialStatus.fatigue;
    }
    if (playerStatus.hunger <= initialStatus.hunger) {
      playerStatus.hunger = initialStatus.hunger;
    }
    if (playerStatus.thirst <= initialStatus.thirst) {
      playerStatus.thirst = initialStatus.thirst;
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
    effects.getItem([1]);
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
