import { inventoryHolder } from './domElements';
import {inventoryCapacity, playerStatus} from '../content/playerStatus';

const cropInventory = () => {
  while (playerStatus.inventory.length > inventoryCapacity) {
    playerStatus.inventory.pop();
    inventoryHolder.removeChild(inventoryHolder.lastChild);
  }
};

export { cropInventory };
