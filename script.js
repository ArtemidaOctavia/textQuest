const description = document.querySelector('.description');
const options = document.querySelector('.options');
const inventory = document.querySelector('.inventory');
const picture = document.querySelector('.illustration_holder');
const playerStatus = {
    inventory: [],
    effects: [],
    location: 'bedScene'
};

const items = {
    royalSword : {
        name: 'Коронный',
        id: 'royal'
    },
    funeralSword : {
        name: 'Похоронный',
        id: 'funeral'
    }
};

const conditions = {

};

const getDomElement = function (tag = 'div', text, id, src) {
    const element = document.createElement(tag);
    if (text) {element.textContent = text};
    if (id) {element.id = id};
    if (src) {element.src = src};
    return element;
};

const effects = {
    getItems: (items) => {
        items.forEach(function (item) {
            const haveItem = playerStatus['inventory'].some(function (element) {
                return item.name === element;
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
            inventory.appendChild(getDomElement('li', item.name, item.id));
            playerStatus['inventory'].push(item.name);
        })
    },
    takeAwayItems: (items) => {
        items.forEach(function (item) { // { name, id }
        var itemIndex = playerStatus['inventory'].indexOf(item.name);

        /*const oldObject = { a: 'a' };

        const newObject = {
            ...oldObject,
            b: 'b',
        };*/

        // rewrite using filter;



        playerStatus['inventory'].splice(itemIndex, 1);
        document.getElementById(item.id).remove();
        })
    },
    moveTo: (id) => {
        renderScene(id);
    }

};
const scenes = {
    // scene name = id //
    bedScene: {
        description: 'А не прогуляться ли по этому беспределу?',
        image: "pictures/bed.jpg",
        actions: {
            standUp: {
                actionDescription: "Встать",
                effects: [
                    {type: effects.moveTo, payload: 'roomScene'}
                ]
            },
            lookAround: {
                actionDescription: "Пошариться",
                effects: [
                    {type: effects.getItems, payload: [items.royalSword, items.funeralSword]},
                    {type: effects.moveTo, payload: 'dualsScene'}
                ]
            }
        }
    },
        dualsScene: {
            description: 'Две штуки',
            image: "pictures/duals.jpg",
            actions: {
                back: {
                    actionDescription: "Назад",
                    effects: [
                        {type: effects.moveTo, payload: 'bedScene'}
                    ]
                }
            }
        },
        roomScene: {
            description: 'Или не прогуляться?',
            image: 'pictures/room.jpg',
            actions: {
                lieDown: {
                    actionDescription: "Лечь обратно",
                    effects: [
                        {type: effects.moveTo, payload: 'bedScene'}
                    ]
                },
                goOutside: {
                    actionDescription: "Выйти из комнаты",
                    effects: [
                        {type: effects.moveTo, payload: 'hallScene'}
                    ]
                }
            }
        },
        hallScene: {
            description: 'Темновато, но я в лом свет включать, чтобы фоткать',
            image: 'pictures/hall.jpg',
            actions: {
                back: {
                    actionDescription: "Назад",
                    effects: [
                        {type: effects.moveTo, payload: 'roomScene'}
                    ]
                },
                left: {
                    actionDescription: "В комнату слева",
                    effects: [
                        {type: effects.moveTo, payload: 'batyaScene'}
                    ]
                },
                right: {
                    actionDescription: "В комнату справа",
                    effects: [
                        {type: effects.moveTo, payload: 'corridorScene'}
                    ]
                }
            }
        },
        batyaScene: {
            description: 'Туда только если с дуалами',
            image: 'pictures/batya.jpg',
            actions: {
                back: {
                    actionDescription: "Стремительно ретироваться",
                    effects: [
                        {type: effects.moveTo, payload: 'hallScene'}
                    ]
                },
                enter: {
                    actionDescription: "Войти",
                    requiredItems: ['Похоронный', 'Коронный'],
                    effects: [
                        {type: effects.moveTo, payload: 'youDiedScene'},
                        {type: effects.takeAwayItems, payload: [items.royalSword, items.funeralSword]}
                    ]
                }
            }
        },
        youDiedScene: {
            description: 'АГРХРАХРАХРАХХХХХГГХХ',
            image: 'pictures/youdied.jpg',
            actions: {
                again: {
                    actionDescription: 'Заново',
                    effects: [
                        {type: effects.moveTo, payload: 'bedScene'}
                    ]
                }
            },
        },
        corridorScene: {
            description: 'Ох и наебался я, чтобы это всё заработало',
            image: 'pictures/corridor.jpg',
            actions: {
                back: {
                    actionDescription: 'Назад',
                    effects: [
                        {type: effects.moveTo, payload: 'hallScene'}
                    ]
                },
                toilet: {
                    actionDescription: 'В туалет',
                    effects: [
                        {type: effects.moveTo, payload: 'morrowindScene'}
                    ]
                },
                kitchen: {
                    actionDescription: 'На кухню',
                    effects: [
                        {type: effects.moveTo, payload: 'kitchenScene'}
                    ]
                }
            },
        },
        morrowindScene: {
            description: 'Не, сюда, наверное, не надо',
            image: 'pictures/morrowind.jpg',
            actions: {
                back: {
                    actionDescription: 'Назад',
                    effects: [
                        {type: effects.moveTo, payload: 'corridorScene'}
                    ]
                }
            }
        },
        kitchenScene: {
            description: 'О боже, да тут же кошечка!',
            image: 'pictures/kitchen.jpg',
            actions: {
                back: {
                    actionDescription: 'Назад',
                    effects: [
                        {type: effects.moveTo, payload: 'corridorScene'}
                    ]
                },
                pet: {
                    actionDescription: 'Приласкать :3',
                    effects: [
                        {type: effects.moveTo, payload: 'pettingScene'}
                    ]
                }
            }
        },
        pettingScene: {
            description: 'Кошечка в замешательстве, пора ливать писать код',
            image: 'pictures/pet_catze.jpg',
            actions: {
                getCuted: {
                    actionDescription: 'Оуу :3',
                    effects: [
                        {type: effects.moveTo, payload: 'kitchenScene'}
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
            effect.type(effect.payload)
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
    const scene = scenes[id];
    description.textContent = scene.description;
    renderPicture(scene);
    killChildren(options);
    for (const option in scene.actions) {
        renderOption(scene.actions[option]);
    }
};

renderScene('bedScene');