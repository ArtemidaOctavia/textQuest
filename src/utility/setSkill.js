import { skillsHolder } from './domElements';
import { getDomElement } from './getDomElement';
import { effects } from '../content/effects';

const setSkill = (skill) => {
  const skillHolder = getDomElement('div', '', '', '', 'game-holder__inventory-item');
  skillHolder.appendChild(getDomElement('div', '', '', skill.src, 'game-holder__inventory-item-picture'));
  const skillName = getDomElement('div', skill.name, '', '', 'game-holder__inventory-item-name');
  skillName.addEventListener('click', () => {
    Object.keys(skill.effects).forEach((effect) => {
      effects[effect](skill.effects[effect]);
    });
  });
  skillHolder.appendChild(skillName);
  skillsHolder.appendChild(skillHolder);
};

export { setSkill };
