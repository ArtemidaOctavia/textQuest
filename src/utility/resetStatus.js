import { playerStatus } from '../content/playerStatus';
import { initialStatus } from '../content/initialStatus';

const resetStatus = () => {
  Object.keys(playerStatus).forEach((key) => {
    playerStatus[key] = initialStatus[key];
  });
};

export { resetStatus };
