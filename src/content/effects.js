import { playerStatus } from './playerStatus';
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
import { initialStatus } from './initialStatus';
import { changeLocation } from '../utility/changeLocation';
import { cutInventory } from '../utility/cutInventory';

const effects = {
  getItems: ({ ...payload }) => {
    Object.entries(payload).forEach(([key, value]) => {
      let quantity = value;
      if (Array.isArray(value)) {
        quantity = value[0] + Math.random() * (value[1] + 1 - value[0]);
      }
      for (let i = 1; i <= quantity; i += 1) {
        let item = items[key];
        if (key === 'randomItem') { item = getRandomKey(items); }
        playerStatus.inventory.push(item.name);
        setItem(item);
        cutInventory();
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
  moveTo: (id) => {
    renderScene(id);
    changeLocation(id);
  },
  changeNeeds: ({
    ...needs
  }) => {
    Object.entries(needs).forEach(([key, value]) => {
      playerStatus[key] += value;
    });
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
    effects.getItems({ randomItem: 1 });
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
