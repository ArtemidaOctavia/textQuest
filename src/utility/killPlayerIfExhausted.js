import { playerStatus, statusLethalValues } from '../content/playerStatus';
import { renderScene } from './renderScene';

const killPlayerIfExhausted = () => {
  Object.keys(statusLethalValues).some((key) => {
    if (playerStatus[key] >= statusLethalValues[key]) {
      renderScene('youDiedScene');
    }
  });
};

export { killPlayerIfExhausted };
