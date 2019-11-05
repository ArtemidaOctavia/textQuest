import { killChildren } from './killChildren';
import { getDomElement } from './getDomElement';
import { picture } from './domElements';

const renderPicture = (scene) => {
  killChildren(picture);
  const image = getDomElement('img', '', '', scene.image);
  image.classList.add('image');
  picture.appendChild(image);
};

export { renderPicture };
