import { playerStatus, statusLethalValues } from '../content/playerStatus';
import { renderScene } from './renderScene';

const killPlayerIfExhausted = () => {
  if (playerStatus.health <= statusLethalValues.health
        || playerStatus.fatigue >= statusLethalValues.fatigue
        || playerStatus.hunger >= statusLethalValues.hunger
        || playerStatus.thirst >= statusLethalValues.thirst) {
    renderScene('youDiedScene');
  }
};

export { killPlayerIfExhausted };
