import { playerStatus, statusMinValues } from './playerStatus';
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
import { setSkill } from '../utility/setSkill';
import { resetStatus } from '../utility/resetStatus';
import { changeLocation } from '../utility/changeLocation';
import { cutInventory } from '../utility/cutInventory';
import { getRandomNumberBetweenTwo } from '../utility/getRandomNumberBetweenTwo';


const effects = {
  getItems: ({ ...payload }) => {
    Object.entries(payload).forEach(([key, value]) => {
      const quantity = Array.isArray(value)
        ? getRandomNumberBetweenTwo(...value)
        : value;

      for (let i = 1; i <= quantity; i += 1) {
        const item = key === 'randomItem' // todo: use item groups like 'fish' for generic fish item
          ? getRandomKey(items)
          : items[key];

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
      // playerStatus[key] = Math.max(playerStatus[key], minPlayerStatusValues[key]);
      // todo: create function getInBounds(value, { min = 0, max })
      // todo: store min-max as { health: { max: 100 } }
    });
    playerStatus.health = playerStatus.health >= statusMinValues.health
      ? statusMinValues.health
      : playerStatus.health;

    playerStatus.fatigue = playerStatus.fatigue <= statusMinValues.fatigue
      ? statusMinValues.fatigue
      : playerStatus.fatigue;

    playerStatus.hunger = playerStatus.hunger <= statusMinValues.hunger
      ? statusMinValues.hunger
      : playerStatus.hunger;

    playerStatus.thirst = playerStatus.thirst <= statusMinValues.thirst
      ? statusMinValues.thirst
      : playerStatus.thirst;
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
    setSkill(target);
  },
};

export { effects };
