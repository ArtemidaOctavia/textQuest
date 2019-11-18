import { playerStatus } from '../content/playerStatus';
import { initialStatus } from '../content/initialStatus';

const resetStatus = () => {
  Object.keys(playerStatus).forEach((param) => {
    playerStatus[param] = Array.isArray(playerStatus[param])
      ? []
      : initialStatus[param];
  });
};

export { resetStatus };
