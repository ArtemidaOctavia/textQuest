import { playerStatus, statusLethalValues } from '../content/playerStatus';
import { renderScene } from './renderScene';

const killPlayerIfExhausted = () => {
  if (
    Object.keys(statusLethalValues).some((key) =>
    playerStatus[key] >= statusLethalValues[key])
  ) { renderScene('youDiedScene'); }
};

export { killPlayerIfExhausted };
