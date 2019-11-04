import {killChildren} from "./killChildren";
import {getDomElement} from "./getDomElement";

const renderPicture = function (scene) {
    killChildren(picture);
    const image = getDomElement('img', '', '', scene.image);
    image.classList.add('image');
    picture.appendChild(image);
};

export {renderPicture}