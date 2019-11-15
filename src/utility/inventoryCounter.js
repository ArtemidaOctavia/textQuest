import { playerStatus } from '../content/playerStatus';
import { inventoryButton } from './domElements';

const inventoryCounter = () =>
{ inventoryButton.textContent = `${'Инвентарь ' + '('}${playerStatus.inventory.length})`; };

export {inventoryCounter}
