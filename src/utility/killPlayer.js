import {playerStatus} from "../content/playerStatus";
import {renderScene} from "./renderScene";

const killPlayer = () => {
    if (playerStatus.health <= 0 ||
        playerStatus.fatigue >= 15 ||
        playerStatus.hunger >= 15 ||
        playerStatus.thirst >= 10) {
        renderScene('youDiedScene');
    }
};

export {killPlayer}