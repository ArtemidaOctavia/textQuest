import { playerStatus } from '../content/playerStatus';
import { skillsHolder } from './domElements';
import { killChildren } from './killChildren';

const removeSkills = () => {
  playerStatus.skills = [];
  killChildren(skillsHolder);
};

export { removeSkills };
