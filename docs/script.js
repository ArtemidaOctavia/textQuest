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
        inventoryHolder.classList.add('hide')
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

getRandomDirection = () => {
    const scenesArray = ['woodScene', 'riverScene', 'gardenScene'];
    return scenesArray[Math.floor(Math.random() * Math.floor(scenesArray.length))]
};

const playerStatus = {
    inventory: [],
    skills: [],
    health: 100,  //max 100
    fatigue: 0, // max 15
    hunger: 0, // max 15
    thirst: 0, // max 10
    location: ''
};

const paramsMap = {
    health: [
        {
            threshold: 25,
            label: 'при смерти',
            colorIndicator: 'red'
        },
        {
            threshold: 50,
            label: 'покоцан',
            colorIndicator: 'orange'
        },
        {
            threshold: 75,
            label: 'подбит',
            colorIndicator: 'yellow'
        },
        {
            threshold: 100,
            label: 'здоров',
            colorIndicator: 'green'
        }
    ],
    fatigue: [
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

const items = {
    apple: {
        name: 'Сытное яблочко',
        id: 'apple',
        src: 'pictures/items/apple.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, 0, -2, 0]
        }
    },
    food : {
        name: 'Вкуснейший супец',
        id: 'food',
        src: 'pictures/items/food.jpg',
        consumable: true,
            effects: {
                changeNeeds: [0, 0, -2, 0]
            }
    },
    rat : {
        name: 'Съедобный крысак',
        id: 'rat',
        src: 'pictures/items/rat.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, 0, -2, 0]
        }
    },
    trunk : {
        name: 'Слоновий хобот',
        id: 'trunk',
        src: 'pictures/items/trunk.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, 0, -2, 0]
        }
    },
    emptyBottle: {
        name: 'Пустая бутылка',
        id: 'emptyBottle',
        src: 'pictures/items/emptyBottle.jpg',
        consumable: true,
        effects: {
            getSpecialItem: 'fullBottle',
            changeNeeds: [0, 2, 0, 1]
        }
    }
};
const specialItems = {
    fullBottle: {
        name: 'Полная бутылка',
        id: 'fullBottle',
        src: 'pictures/items/fullBottle.jpg',
        consumable: true,
        effects: {
            changeNeeds: [0, -1, 0, -2]
        }
    }
};

const skills = {
    findRiver: {
        name: 'Найти реку',
        src: 'pictures/items/compass.jpg',
        effects: {
            moveTo: 'riverScene',
            changeNeeds: [0, 1, 1, 1]
        }
    }
};

const getDomElement = (tag = 'div', text, id, src, classlist) => {
    const element = document.createElement(tag);
    if (text) {element.textContent = text}
    if (id) {element.id = id}
    if (src) {element.src = src}
    if (classlist) {element.classList.add(classlist)}
    return element;
};

getRandomKey = (targetObject) => {
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

const effects = {
    getRandomItem: (quantity) => {
        for (let i = 1; i <= quantity; i++) {
            const item = getRandomKey(items);
            playerStatus['inventory'].push(item.name);
            const itemHolder = getDomElement('div', '', item.id, '', "inventory-item");
            itemHolder.appendChild(getDomElement('img', '', '', item.src, "inventory-item-picture"));
            itemHolder.appendChild(getDomElement('div', item.name, '', '', 'inventory-item-name'));
            inventoryHolder.appendChild(itemHolder);
            itemHolder.addEventListener('click', function () {
                for (effect in item.effects) {
                    effects[effect](item.effects[effect]);
                }
                if (item.consumable) {
                    effects.takeAwayItems([item])
                }
            })
        }
        if (playerStatus['inventory'].length > 15) {
            while (playerStatus['inventory'].length !== 15) {
                playerStatus['inventory'].splice(-1);
                inventoryHolder.removeChild(inventoryHolder.lastChild)
            }
        }
    },
    getSpecialItem: (specialItem) => {
        const item = specialItems[specialItem];
        playerStatus['inventory'].push(item.name);
        const itemHolder = getDomElement('div', '', item.id, '', "inventory-item");
        itemHolder.appendChild(getDomElement('img', '', '', item.src, "inventory-item-picture"));
        itemHolder.appendChild(getDomElement('div', item.name, '', '', 'inventory-item-name'));
        inventoryHolder.appendChild(itemHolder);
        itemHolder.addEventListener('click', function () {
            for (effect in item.effects) {
                effects[effect](item.effects[effect]);
            }
            if (item.consumable) {
                effects.takeAwayItems([item])
            }
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
        changeStatusIndicators();
        killPlayer()
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
        effects.getSkill('findRiver');
        renderScene('woodScene');
    },
    backToMainMenu: () => {
        menu.classList.remove('hide');
        gameplayUI.classList.add('hide');
    },
    getSkill: (skill) => {
        const target = skills[skill];
        playerStatus['skills'].push(target.name);
        const skillHolder = getDomElement('div', '', '', '', "inventory-item");
        skillHolder.appendChild(getDomElement('img', '', '', target.src, "inventory-item-picture"));
        skillHolder.appendChild(getDomElement('div', target.name, '', '', 'inventory-item-name'));
        skillHolder.addEventListener('click', function () {
            for (effect in target.effects) {
                effects[effect](target.effects[effect]);
            }
        });
        skillsHolder.appendChild(skillHolder);
    }
};

const scenes = {
    // scene name = id //
    woodScene: {
        description: 'Лес — экологическая система, биоценоз, в которой главной жизненной формой являются деревья ' +
        'Лес — составная часть природы, понятие «лес» можно рассматривать на разных уровнях. В глобальном масштабе —' +
        ' это часть биосферы, в локальном — это может быть насаждение. Лес также можно рассматривать как ' +
        'природно-зональное подразделение, как провинциальное подразделение, как лесной массив (Шипов лес, ' +
        'Шатилов лес, Чёрный лес), как экосистему. Леса занимают около трети площади суши, площадь леса на ' +
        'Земле составляет 38 млн км² Из них 264 млн га, или 7 %, посажены человеком к началу XXI века' +
        ' человек уничтожил около 50 % площадей лесов, ранее существовавших на планете. Половина лесной зоны ' +
        'принадлежит тропическим лесам. Площади, занятые деревьями с сомкнутостью крон менее 0,2—0,3, считаются ' +
        'редколесьем.',
        image: "pictures/locations/wood.jpg",
        actions: {
            forward: {
                actionDescription: "Идти вперёд",
                effects: [
                    {type: effects.moveForward, payload: 'randomDirection'},
                    {type: effects.changeNeeds, payload: [0, 1, 1, 1]}
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
            description: 'Огород — относительно небольшой участок земли, предназначенный преимущественно для ' +
            'выращивания овощей. На огороде могут также присутствовать посадки ягод и плодовых деревьев. Обычно ' +
            'огород огорожен забором или живой изгородью. На выбранном участке также допускается применение парников' +
            ' и теплиц. Возделывание огородов называется огородничеством.',
            image: "pictures/locations/garden.jpg",
            actions: {
                forward: {
                    actionDescription: "Идти вперёд",
                    effects: [
                        {type: effects.moveForward, payload: 'randomDirection'},
                        {type: effects.changeNeeds, payload: [0, 1, 1, 1]}
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
            description: 'Река — природный водный поток значительных размеров с естественным течением по руслу ' +
            '(выработанному им естественному углублению) от истока вниз до устья[2] и питающийся за счёт поверхностного' +
            ' и подземного стока с его бассейна. Реки являются составной частью гидрологического цикла. Вода в реке, ' +
            'как правило, собирается с поверхностных стоков, образующихся в результате атмосферных осадков с' +
            ' определённой площади, ограниченной водоразделом (бассейн реки), а также из других источников, ' +
            'например запасов подземных вод, влаги, хранящейся в естественном льду (в процессе таяния ледников) ' +
            'и снеговом покрове. В местах естественных или искусственных препятствий течению реки появляются ' +
            'водохранилища (проточные озёра либо искусственные моря). Лимноло́гия (греч. λίμνε — озеро, λόγος — учение)' +
            ' или озерове́дение — раздел гидрологии, наука о физических, химических и биологических аспектах озёр и ' +
            'других пресных водоёмов, в том числе и водохранилищ. В свою очередь реки являются предметом одного из ' +
            'крупнейших разделов гидрологии суши — речной гидрологии или потамоло́гии ' +
            '(от др.-греч. ποταμός — река, λόγος — учение — буквально наука о реках), которая занимается' +
            ' изучением строения речных сетей, стока рек, морфометрией речных бассейнов и так далее. Как правило,' +
            ' реки прокладывают свой путь и текут по зонам наименьшего напряжения и сопротивления — по тектоническим ' +
            'разломам.',
            image: 'pictures/locations/river.jpg',
            actions: {
                forward: {
                    actionDescription: "Идти вперёд",
                    effects: [
                        {type: effects.moveForward, payload: 'randomDirection'},
                        {type: effects.changeNeeds, payload: [0, 1, 1, 1]}

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
            description: 'Смерть (гибель, кончина) — прекращение, полная остановка биологических и физиологических' +
            ' процессов жизнедеятельности организма. В медицине изучением смерти занимается наука танатология.' +
            ' В естественной среде после смерти тела умерших организмов начинают разлагаться. Смерть всегда ' +
            'несла отпечаток таинственности и мистичности. Непредсказуемость, неизбежность, неожиданность и подчас ' +
            'незначительность причин, приводящих к смерти, выводили само понятие смерти за пределы человеческого ' +
            'восприятия. Многие религии превращали смерть в божественную кару за греховное существование либо в ' +
            'божественный дар, после которого человека ожидает счастливая и вечная жизнь (чаще всего понятие «смерть» ' +
            'люди применяют по отношению к своему виду).',
            image: 'pictures/locations/youDied.jpg',
            actions: {
                newGame: {
                    actionDescription: 'Новая игра',
                    effects: [
                        {type: effects.startNewGame, payload: ''}
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
    for (const option in scene.actions) {
        renderOption(scene.actions[option]);
    }
};