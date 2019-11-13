import { inventoryHolder } from './domElements';
import {inventoryCapacity, playerStatus} from '../content/playerStatus';

const cutInventory = () => {
  while (playerStatus.inventory.length > inventoryCapacity) {
    playerStatus.inventory.pop();
    inventoryHolder.removeChild(inventoryHolder.lastChild);
  }
};

export { cutInventory };
