import { inventoryHolder } from './domElements';
import {inventoryCapacity, playerStatus} from '../content/playerStatus';
import {inventoryCounter} from "./inventoryCounter";

const cropInventory = () => {
  while (playerStatus.inventory.length > inventoryCapacity) {
    playerStatus.inventory.pop();
    inventoryHolder.removeChild(inventoryHolder.lastChild);
  }
  inventoryCounter();
};

export { cropInventory };
