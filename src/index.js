import './styles.css';
import {playerStatus} from "./content/playerStatus";
import {paramsMap} from "./content/paramsMap";
import {effects} from "./content/effects";
import {scenes} from "./content/scenes";

const description = document.querySelector('.description');
const options = document.querySelector('.options');
const picture = document.querySelector('.illustration-holder');
const newGame = document.querySelector('.new-game');
const menu = document.querySelector('.menu');
const gameplayUI = document.querySelector('.game-holder');
const aboutProject = document.querySelector('.about-project');
const menuButtons = document.querySelector('.menu-buttons');
const projectInformation = document.querySelector('.project-information');
const backButton = document.querySelector('.backToMenu');
const health = document.querySelector('.health');
const fatigue = document.querySelector('.fatigue');
const hunger = document.querySelector('.hunger');
const thirst = document.querySelector('.thirst');
const inventoryButton = document.querySelector('.inventory-button');
const skillsButton = document.querySelector('.skills-button');
const descriptionHolder = document.querySelector('.description-holder');
const inventoryHolder = document.querySelector('.inventory-holder');
const skillsHolder = document.querySelector('.skills-holder');
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

const isOpen = (element) => {
    let classlist = element.classList;
    let trigger = true;
    classlist.forEach(function (element) {
        if (element === "hide") {
            trigger = !trigger
        }
    });
    return trigger;
};

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

const getRandomDirection = function () {
    const scenesArray = ['woodScene', 'riverScene', 'gardenScene'];
    return scenesArray[Math.floor(Math.random() * Math.floor(scenesArray.length))]
};

const changeStatusIndicator = (param, target) => {
    paramsMap[param].forEach(item => {
        if (playerStatus[param] >= item.threshold) {
            target.textContent = item.label;
            target.style.color = item.colorIndicator
        }
    })
};

const changeStatusIndicators = function () {
    changeStatusIndicator('health', health);
    changeStatusIndicator('fatigue', fatigue);
    changeStatusIndicator('thirst', thirst);
    changeStatusIndicator('hunger', hunger)
};

const getDomElement = (tag = 'div', text, id, src, classlist) => {
    const element = document.createElement(tag);
    if (text) {element.textContent = text}
    if (id) {element.id = id}
    if (src) {element.src = src}
    if (classlist) {element.classList.add(classlist)}
    return element;
};

const getRandomKey = function (targetObject) {
    return targetObject[Object.keys(targetObject)[Math.floor(Math.random() * Math.floor(Object.keys(targetObject).length))]];
};

const killPlayer = () => {
    if (playerStatus.health <= 0 ||
        playerStatus.fatigue >= 15 ||
        playerStatus.hunger >= 15 ||
        playerStatus.thirst >= 10) {
        renderScene('youDiedScene');
    }
};

const renderOption = function (action) {
    const option = getDomElement('li', action.actionDescription);
    option.classList.add('option');
    option.addEventListener('click', function(){
        action.effects.forEach(function (effect) {
            effect.type(effect.payload);
        })
    });
    options.appendChild(option);
};

const killChildren = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const renderPicture = function (scene) {
    killChildren(picture);
    const image = getDomElement('img', '', '', scene.image);
    image.classList.add('image');
    picture.appendChild(image);
};

const renderScene = function (id){
    let scene = scenes[id];
    description.textContent = scene.description;
    renderPicture(scene);
    killChildren(options);
    for (const action in scene.actions) {
        renderOption(scene.actions[action]);
    }
};