import './styles.css';
import {isOpen} from "./utility/isOpen";
import {effects} from "./content/effects";

// const description = document.querySelector('.description');
// const options = document.querySelector('.options');
// const picture = document.querySelector('.illustration-holder');
// const newGame = document.querySelector('.new-game');
// const menu = document.querySelector('.menu');
// const gameplayUI = document.querySelector('.game-holder');
// const aboutProject = document.querySelector('.about-project');
// const menuButtons = document.querySelector('.menu-buttons');
// const projectInformation = document.querySelector('.project-information');
// const backButton = document.querySelector('.backToMenu');
// const health = document.querySelector('.health');
// const fatigue = document.querySelector('.fatigue');
// const hunger = document.querySelector('.hunger');
// const thirst = document.querySelector('.thirst');
// const inventoryButton = document.querySelector('.inventory-button');
// const skillsButton = document.querySelector('.skills-button');
// const descriptionHolder = document.querySelector('.description-holder');
// const inventoryHolder = document.querySelector('.inventory-holder');
// const skillsHolder = document.querySelector('.skills-holder');

import {newGame} from "./utility/domElements";
import {aboutProject} from "./utility/domElements";
import {gameplayUI} from "./utility/domElements";
import {menu} from "./utility/domElements";
import {skillsButton} from "./utility/domElements";
import {inventoryHolder} from "./utility/domElements";
import {backButton} from "./utility/domElements";
import {inventoryButton} from "./utility/domElements";
import {descriptionHolder} from "./utility/domElements";
import {skillsHolder} from "./utility/domElements";
import {menuButtons} from "./utility/domElements";
import {projectInformation} from "./utility/domElements";

aboutProject.addEventListener('click', function () {
    menuButtons.classList.add('hide');
    projectInformation.classList.remove('hide');
    backButton.classList.remove('hide')
});

newGame.addEventListener('click', function() {
    effects.startNewGame();
    menu.classList.add('hide');
    gameplayUI.classList.remove('hide');
});

backButton.addEventListener('click', function() {
    menuButtons.classList.remove('hide');
    projectInformation.classList.add('hide');
    backButton.classList.add('hide')
});

skillsButton.addEventListener('click', function () {
    if (isOpen(skillsHolder)) {
        descriptionHolder.classList.remove('hide');
        inventoryHolder.classList.add('hide');
        skillsHolder.classList.add('hide');
    } else {
        skillsHolder.classList.remove('hide');
        descriptionHolder.classList.add('hide');
        inventoryHolder.classList.add('hide')
    }
});

inventoryButton.addEventListener('click', function () {
    if (isOpen(inventoryHolder)) {
        descriptionHolder.classList.remove('hide');
        inventoryHolder.classList.add('hide');
        skillsHolder.classList.add('hide')
    } else {
        descriptionHolder.classList.add('hide');
        inventoryHolder.classList.remove('hide');
        skillsHolder.classList.add('hide');
    }
});