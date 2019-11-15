import { playerStatus, statusLethalValues } from '../content/playerStatus';
import { renderScene } from './renderScene';

const killPlayerIfExhausted = () => {
  Object.keys(playerStatus).forEach((key) => {
    playerStatus[key] >= statusLethalValues[key]
      ? renderScene('youDiedScene')
      : false;
  });
};

export { killPlayerIfExhausted };
