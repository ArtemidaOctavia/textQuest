import { changeStatusIndicator } from './changeStatusIndicator';
import {
  damage, fatigue, thirst, hunger,
} from './domElements';


const changeStatusIndicators = () => {
  changeStatusIndicator('damage', damage);
  changeStatusIndicator('fatigue', fatigue);
  changeStatusIndicator('thirst', thirst);
  changeStatusIndicator('hunger', hunger);
};

export { changeStatusIndicators };
