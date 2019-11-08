import { changeStatusIndicator } from './changeStatusIndicator';
import {
  health, fatigue, thirst, hunger,
} from './domElements';


const changeStatusIndicators = () => {
  changeStatusIndicator('health', health);
  changeStatusIndicator('fatigue', fatigue);
  changeStatusIndicator('thirst', thirst);
  changeStatusIndicator('hunger', hunger);
};

export { changeStatusIndicators };
