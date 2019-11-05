import {changeStatusIndicator} from "./changeStatusIndicator";
import {health} from "./domElements";
import {fatigue} from "./domElements";
import {thirst} from "./domElements";
import {hunger} from "./domElements";

const changeStatusIndicators = () => {
    changeStatusIndicator('health', health);
    changeStatusIndicator('fatigue', fatigue);
    changeStatusIndicator('thirst', thirst);
    changeStatusIndicator('hunger', hunger)
};

export {changeStatusIndicators}