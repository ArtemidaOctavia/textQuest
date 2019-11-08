import './styles.css';
import { isOpen } from './utility/isOpen';
import { effects } from './content/effects';

import {
  newGame, aboutProject, gameplayUI, menu, skillsButton,
  inventoryHolder, backButton, inventoryButton,
  descriptionHolder, skillsHolder, menuButtons, projectInformation,
} from './utility/domElements';


aboutProject.addEventListener('click', () => {
  menuButtons.classList.add('hide');
  projectInformation.classList.remove('hide');
  backButton.classList.remove('hide');
});

newGame.addEventListener('click', () => {
  effects.startNewGame();
  menu.classList.add('hide');
  gameplayUI.classList.remove('hide');
});

backButton.addEventListener('click', () => {
  menuButtons.classList.remove('hide');
  projectInformation.classList.add('hide');
  backButton.classList.add('hide');
});

skillsButton.addEventListener('click', () => {
  if (isOpen(skillsHolder)) {
    descriptionHolder.classList.remove('hide');
    inventoryHolder.classList.add('hide');
    skillsHolder.classList.add('hide');
  } else {
    skillsHolder.classList.remove('hide');
    descriptionHolder.classList.add('hide');
    inventoryHolder.classList.add('hide');
  }
});

inventoryButton.addEventListener('click', () => {
  if (isOpen(inventoryHolder)) {
    descriptionHolder.classList.remove('hide');
    inventoryHolder.classList.add('hide');
    skillsHolder.classList.add('hide');
  } else {
    descriptionHolder.classList.add('hide');
    inventoryHolder.classList.remove('hide');
    skillsHolder.classList.add('hide');
  }
});
