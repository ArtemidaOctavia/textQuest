import { scenes } from '../content/scenes';
import { renderOption } from './renderOption';
import { renderPicture } from './renderPicture';
import { killChildren } from './killChildren';
import { description, options, descriptionTitle } from './domElements';

const renderScene = (id) => {
  const scene = scenes[id];
  description.textContent = scene.description;
  renderPicture(scene);
  killChildren(options);
  Object.keys(scene.actions).forEach((action) => {
    renderOption(scene.actions[action]);
  });
  descriptionTitle.textContent = scene.title;
};

export { renderScene };
