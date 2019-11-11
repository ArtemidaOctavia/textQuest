import { inventoryHolder } from './domElements';
import { playerStatus } from '../content/playerStatus';

const cutInventory = () => {
  while (playerStatus.inventory.length > 15) {
    playerStatus.inventory.pop();
    inventoryHolder.removeChild(inventoryHolder.lastChild);
  }
};

export { cutInventory };
