import {changeStatusIndicator} from "./changeStatusIndicator";

const changeStatusIndicators = function () {
    changeStatusIndicator('health', health);
    changeStatusIndicator('fatigue', fatigue);
    changeStatusIndicator('thirst', thirst);
    changeStatusIndicator('hunger', hunger)
};

export {changeStatusIndicators}