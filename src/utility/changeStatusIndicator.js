import {paramsMap} from "../content/paramsMap";
import {playerStatus} from "../content/playerStatus";

const changeStatusIndicator = (param, target) => {
    paramsMap[param].forEach(item => {
        if (playerStatus[param] >= item.threshold) {
            target.textContent = item.label;
            target.style.color = item.colorIndicator
        }
    })
};

export {changeStatusIndicator}