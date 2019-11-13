import { playerStatus } from '../content/playerStatus';
import { initialStatus } from '../content/initialStatus';

const resetStatus = () => {
  Object.keys(playerStatus).forEach((param) => {
    Array.isArray(playerStatus[param]) ? playerStatus[param] = []
      : playerStatus[param] = initialStatus[param];
  });
};

export { resetStatus };
