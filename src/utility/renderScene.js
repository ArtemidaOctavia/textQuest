import {scenes} from "../content/scenes";
import {renderOption} from "./renderOption";
import {renderPicture} from "./renderPicture";
import {killChildren} from "./killChildren";
import {description} from "./domElements";

const renderScene = function (id){
    let scene = scenes[id];
    description.textContent = scene.description;
    renderPicture(scene);
    killChildren(options);
    for (const action in scene.actions) {
        renderOption(scene.actions[action]);
    }
};

export {renderScene}