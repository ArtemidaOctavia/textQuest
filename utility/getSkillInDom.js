import { skillsHolder } from './domElements';
import { getDomElement } from './getDomElement';
import { effects } from '../content/effects';

const getSkillInDom = (target) => {
  const skillHolder = getDomElement('div', '', '', '', 'inventory-item');
  skillHolder.appendChild(getDomElement('img', '', '', target.src, 'inventory-item-picture'));
  skillHolder.appendChild(getDomElement('div', target.name, '', '', 'inventory-item-name'));
  skillHolder.addEventListener('click', () => {
    Object.keys(target.effects).forEach((effect) => {
      effects[effect](target.effects[effect]);
    });
  });
  skillsHolder.appendChild(skillHolder);
};

export { getSkillInDom };
