import { skillsHolder } from './domElements';
import { getDomElement } from './getDomElement';
import { effects } from '../content/effects';

const setSkill = (skill) => {
  const skillHolder = getDomElement('div', '', '', '', 'game-holder__inventory-item');
  skillHolder.appendChild(getDomElement('img', '', '', skill.src, 'game-holder__inventory-item-picture'));
  skillHolder.appendChild(getDomElement('div', skill.name, '', '', 'game-holder__inventory-item-name'));
  skillHolder.addEventListener('click', () => {
    Object.keys(skill.effects).forEach((effect) => {
      effects[effect](skill.effects[effect]);
    });
  });
  skillsHolder.appendChild(skillHolder);
};

export { setSkill };
