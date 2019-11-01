const description = document.querySelector('.description');
const options = document.querySelector('.options');
const inventory = document.querySelector('.inventory');
const picture = document.querySelector('.illustration_holder');
const newGame = document.querySelector('.new-game');
const menu = document.querySelector('.menu');
const gameplayUI = document.querySelector('.game_holder');
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
const descriptionHolder = document.querySelector('.description_holder');
const inventoryHolder = document.querySelector('.inventory_holder');
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

let inventoryOpen = false;
inventoryButton.addEventListener('click', function () {
    inventoryOpen = !inventoryOpen;
    console.log(inventoryOpen);
    if (inventoryOpen) {
        descriptionHolder.classList.add('hide');
        inventoryHolder.classList.remove('hide');
    } else {
        descriptionHolder.classList.remove('hide');
        inventoryHolder.classList.add('hide');
    }
});

getRandomDirection = () => {
    const scenesArray = ['woodScene', 'riverScene', 'gardenScene'];
    return scenesArray[Math.floor(Math.random() * Math.floor(scenesArray.length))]
};

const playerStatus = {
    inventory: [],
    health: 100,  //max 100
    fatigue: 0, // max 15
    hunger: 0, // max 15
    thirst: 0, // max 10
    location: ''
};


const paramsMap = {
    health: [
        {
            threshold: 100,
            label: 'здоров',
            colorIndicator: 'green'
        },
        {
            threshold: 75,
            label: 'подбит',
            colorIndicator: 'yellow'
        },
        {
            threshold: 50,
            label: 'покоцан',
            colorIndicator: 'orange'
        },
        {
            threshold: 25,
            label: 'при смерти',
            colorIndicator: 'red'
        }
    ],
    stamina: [
        {
            threshold: 0,
            label: 'бодр',
            colorIndicator: 'green'
        },
        {
            threshold: 4,
            label: 'подустал',
            colorIndicator: 'yellow'
        },
        {
            threshold: 8,
            label: 'устал',
            colorIndicator: 'orange'
        },
        {
            threshold: 12,
            label: 'измотан',
            colorIndicator: 'red'
        },
    ],
    hunger: [
        {
            threshold: 0,
            label: 'сыт',
            colorIndicator: 'green'
        },
        {
            threshold: 4,
            label: 'проголодался',
            colorIndicator: 'yellow'
        },
        {
            threshold: 8,
            label: 'урчит в животе',
            colorIndicator: 'orange'
        },
        {
            threshold: 12,
            label: 'голоден',
            colorIndicator: 'red'
        },
    ],
    thirst: [
        {
            threshold: 0,
            label: 'Нагидрирован',
            colorIndicator: 'green'
        },
        {
            threshold: 4,
            label: 'Недогидрирован',
            colorIndicator: 'yellow'
        },
        {
            threshold: 6,
            label: 'Не нагидрирован',
            colorIndicator: 'orange'
        },
        {
            threshold: 9,
            label: 'Дегидрирован',
            colorIndicator: 'red'
        },
    ]
};

const changeStatusIndicator = (param, status) => {
        status.textContent = param.label;
        status.style.color = param.colorIndicator;
};

const changeStatusIndicators = function () {
            switch (true) {
                case playerStatus.health > 75:
                    health.textContent = 'здоров';
                    health.style.color = 'green';
                    break;
                case playerStatus.health <= 75:
                    health.textContent = 'подбит';
                    health.style.color = 'yellow';
                    break;
                case playerStatus.health <= 50:
                    health.textContent = 'покоцан';
                    health.style.color = 'orange';
                    break;
                case playerStatus.health <= 25:
                    health.textContent = 'при смерти';
                    health.style.color = 'red';
                    break;
            }
                switch (true) {
                case playerStatus.fatigue < 4:
                    fatigue.textContent = 'бодр';
                    fatigue.style.color = 'green';
                    break;
                case playerStatus.fatigue >= 4:
                    fatigue.textContent = 'подустал';
                    fatigue.style.color = 'yellow';
                    break;
                case playerStatus.fatigue >= 8:
                    fatigue.textContent = 'устал';
                    fatigue.style.color = 'orange';
                    break;
                case playerStatus.fatigue >= 12:
                    fatigue.textContent = 'измотан';
                    fatigue.style.color = 'red';
                    break;
            }
            switch (true) {
                case playerStatus.hunger < 4:
                    hunger.textContent = 'сыт';
                    hunger.style.color = 'green';
                    break;
                case playerStatus.hunger >= 4:
                    hunger.textContent = 'проголодался';
                    hunger.style.color = 'yellow';
                    break;
                case playerStatus.hunger >= 8:
                    hunger.textContent = 'урчит в животе';
                    hunger.style.color = 'orange';
                    break;
                case playerStatus.hunger >= 12:
                    hunger.textContent = 'голоден';
                    hunger.style.color = 'red';
                    break;
            }
            switch (true) {
                case playerStatus.thirst < 3:
                    thirst.textContent = 'напившись';
                    thirst.style.color = 'green';
                    break;
                case playerStatus.thirst >= 4:
                    thirst.textContent = 'хочется пить';
                    thirst.style.color = 'yellow';
                    break;
                case playerStatus.thirst >= 6:
                    thirst.textContent = 'пересохло в горле';
                    thirst.style.color = 'orange';
                    break;
                case playerStatus.thirst >= 9:
                    thirst.textContent = 'обезвожен';
                    thirst.style.color = 'red';
                    break;
            }
    };

const item = {
    name: 'Сытное яблочко',
    id: 'apple',
    src: 'pictures/items/apple.jpg',
    consumable: true,
    effect: {
        changeNeeds: [0, 0, -2, 0]
    }
};


const items = {
    apple : {
        name: 'Сытное яблочко',
        id: 'apple',
        src: 'pictures/items/apple.jpg',
        effect: (target) => {
            target.addEventListener('click', function () {
                effects.changeNeeds([0, 0, -2, 0]);
                effects.takeAwayItems([items.apple])
            })
        }
    },
    food : {
        name: 'Вкуснейшая ухбля',
        id: 'food',
        src: 'pictures/items/food.jpg',
        effect: (target) => {
            target.addEventListener('click', function () {
                effects.changeNeeds([0, 0, -2, 0]);
                effects.takeAwayItems([items.food])
            })
        }
    },
    rat : {
        name: 'Очень съедобный крысак',
        id: 'rat',
        src: 'pictures/items/rat.jpg',
        effect: (target) => {
            target.addEventListener('click', function () {
                effects.changeNeeds([0, 0, -2, 0]);
                effects.takeAwayItems([items.rat])
            })
        }
    },
    trunk : {
        name: 'Слоновий хобот',
        id: 'trunk',
        src: 'pictures/items/trunk.jpg',
        effect: (target) => {
            target.addEventListener('click', function () {
                effects.changeNeeds([0, 0, -2, 0]);
                effects.takeAwayItems([items.trunk])
            })
        }
    }
};

const conditions = {

};

const getDomElement = (tag = 'div', text, id, src, classlist) => {
    const element = document.createElement(tag);
    if (text) {element.textContent = text}
    if (id) {element.id = id}
    if (src) {element.src = src}
    if (classlist) {element.classList.add(classlist)}
    return element;
};

getRandomElementFromArray = (items) => {
    return items[Math.floor(Math.random() * items.length)]
};

getRandomKey = (targetObject) => {
    const keys = Object.keys(targetObject);
    return targetObject[
        getRandomElementFromArray(keys)
    ];
};

const effects = {
    getRandomItem: (quantity) => {
        if (playerStatus['inventory'].length === 15) {
            return;
        }
        // [...Array(4)].map((item, i) => i);
        for (let i = 1; i <= quantity; i++) {
            const item = getRandomKey(items);
            playerStatus['inventory'].push(item.name);
            const itemHolder = getDomElement('div', '', item.id, '', "inventory-item");
            item.effect(itemHolder);
            itemHolder.appendChild(getDomElement('img', '', '', item.src, "inventory-item-picture"));
            itemHolder.appendChild(getDomElement('div', item.name, '', '', 'inventory-item-name'));
            inventoryHolder.appendChild(itemHolder);
        }
    },
    getItems: (items) => {
        items.forEach(function ({name, id, src, effect}) {
            const haveItem = playerStatus['inventory'].some(function (element) {
                return name === element;
            });
            if (haveItem) {
                return;
            }

            /*createElement = ({ tag = 'div', ...props }) => { // default value
                const elem = document.createElement(tag); // tag || 'div'

                for (let [key, value] of Object.entries(props)) {
                    elem[key] = value;
                }

                elem.textContent = text;

                // ......
            };*/

            // createElement({ id: 'some id', text: 'textContent'});
            playerStatus['inventory'].push(name);
            const itemHolder = getDomElement('div', '', id, '', "inventory-item");
            effect(itemHolder);
            itemHolder.appendChild(getDomElement('img', '', '', src, "inventory-item-picture"));
            itemHolder.appendChild(getDomElement('div', name, '' , '', 'inventory-item-name'));
            inventoryHolder.appendChild(itemHolder);
        })
    },
    takeAwayItems: (items) => {
        items.forEach(function ({name, id}) { // { name, id }
        const itemIndex = playerStatus['inventory'].indexOf(name);
        /*const oldObject = { a: 'a' };

        const newObject = {
            ...oldObject,
            b: 'b',
        };*/

        // rewrite using filter;
        playerStatus['inventory'].splice(itemIndex, 1);
        document.getElementById(id).remove();
        })
    },
    takeAwayAllItems: () => {
        playerStatus['inventory'] = [];
        killChildren(inventoryHolder)
    },
    moveTo: (id) => {
        renderScene(id);
    },
    changeNeeds: (value) => {
        // { health: -4, fatigue: +3 }

        playerStatus.health += value[0];
        playerStatus.fatigue += value[1];
        playerStatus.hunger += value[2];
        playerStatus.thirst += value[3];

        if (playerStatus.health >= 100) {
            playerStatus.health = 100;
        }
        if (playerStatus.fatigue <= 0) {
            playerStatus.fatigue = 0
        }
        if (playerStatus.hunger <= 0) {
            playerStatus.hunger = 0;
        }
        if (playerStatus.thirst <= 0) {
            playerStatus.thirst = 0
        }
        changeStatusIndicators()
    },
    moveForward: () => {
        renderScene(getRandomDirection())
    },
    startNewGame: () => {
        playerStatus.health = 100;
        playerStatus.fatigue = 0;
        playerStatus.hunger = 0;
        playerStatus.thirst = 0;
        changeStatusIndicators();
        effects.takeAwayAllItems();
        effects.getRandomItem(1);
        renderScene('woodScene');
    },
    backToMainMenu: () => {
        menu.classList.remove('hide');
        gameplayUI.classList.add('hide');
    },
};

const scenes = {
    // scene name = id //
    woodScene: {
        description: 'Тупо лес',
        image: "pictures/locations/wood.jpg",
        actions: {
            forward: {
                actionDescription: "Идти вперёд",
                effects: [
                    {type: effects.changeNeeds, payload: [0, 1, 1, 1]},
                    {type: effects.moveForward, payload: 'randomDirection'}
                ]
            },
            rest: {
                actionDescription: "Отдохнуть",
                effects: [
                    {type: effects.changeNeeds, payload: [0, -4, 1, 1]}
                ]
            },
            search: {
                actionDescription: "Поиск",
                effects: [
                    {type: effects.changeNeeds, payload: [0, 3, 0, 2]},
                    {type: effects.getRandomItem, payload: 1}
                ]
            },
        }
    },
        gardenScene: {
            description: 'Тупо огород',
            image: "pictures/locations/garden.jpg",
            actions: {
                forward: {
                    actionDescription: "Идти вперёд",
                    effects: [
                        {type: effects.changeNeeds, payload: [0, 1, 1, 1]},
                        {type: effects.moveForward, payload: 'randomDirection'}
                    ]
                },
                rest: {
                    actionDescription: "Отдохнуть",
                    effects: [
                        {type: effects.changeNeeds, payload: [0, -4, 1, 1]}
                    ]
                },
                search: {
                    actionDescription: "Поиск",
                    effects: [
                        {type: effects.changeNeeds, payload: [0, 1, 1, 1]},
                        {type: effects.getRandomItem, payload: 3}
                    ]
                },
            }
        },
        riverScene: {
            description: 'Тупо река',
            image: 'pictures/locations/river.jpg',
            actions: {
                forward: {
                    actionDescription: "Идти вперёд",
                    effects: [
                        {
                            type: effects.changeNeeds,
                            payload: [0, 1, 1, 1]
                        },
                        {
                            type: 'moveForward',
                            payload: 'randomDirection'
                        }
                    ]
                },
                rest: {
                    actionDescription: "Отдохнуть",
                    effects: [
                        {type: effects.changeNeeds, payload: [0, -4, 1, 1]}
                    ]
                },
                search: {
                    actionDescription: "Поиск",
                    effects: [
                        {type: effects.changeNeeds, payload: [0, 1, 1, -15]},
                    ]
                },
            }
        },
        youDiedScene: {
            description: 'отъехал',
            image: 'pictures/locations/youDied.jpg',
            actions: {
                newGame: {
                    actionDescription: 'Новая игра',
                    effects: [
                        {type: effects.startNewGame}
                    ]
                },
                menu: {
                    actionDescription: 'Главное меню',
                    effects: [
                        {type: effects.backToMainMenu, payload: ''},
                        {type: effects.startNewGame, payload: ''}
                    ]
                }
            }
        }
    };

const renderOption = function (action) {
    if (action.requiredItems) {
        const requiredItems = action.requiredItems;
        const hasNecessaryItems = requiredItems.every(function (item) {
            return playerStatus['inventory'].indexOf(item) === -1;
        });
        if (hasNecessaryItems) {
            return
        }
    }
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
    if (playerStatus.health <= 0 ||
        playerStatus.fatigue >= 15 ||
        playerStatus.hunger >= 15 ||
        playerStatus.thirst >= 10) {
        scene = scenes['youDiedScene'];
    }
    description.textContent = scene.description;
    renderPicture(scene);
    killChildren(options);
    for (const option in scene.actions) {
        renderOption(scene.actions[option]);
    }
};





