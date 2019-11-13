import { scenes } from '../content/scenes';
import { renderOption } from './renderOption';
import { renderPicture } from './renderPicture';
import { killChildren } from './killChildren';
import { description, options } from './domElements';
import { effects } from '../content/effects';


const renderScene = (id) => {
  const scene = scenes[id];
  description.textContent = scene.description;
  renderPicture(scene);
  killChildren(options);
  Object.keys(scene.actions).forEach((action) => {
    const option = renderOption(scene.actions[action]);
    option.addEventListener('click', () => {
      action.effects.forEach((effect) => {
        effects[effect.type](effect.payload);
      });
    });
  });
};

export { renderScene };
