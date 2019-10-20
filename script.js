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

const effects = {
    getItems: (items) => {
        items.forEach(function (item) {
            var haveItem = false;
            playerStatus['inventory'].forEach(function (element) {
                if (item.name === element) {
                    haveItem = true;
                }
            });
            if (haveItem === true) {
                return;
            }
            const itemElement = document.createElement('li');
            itemElement.textContent = item.name;
            itemElement.id = item.id;
            inventory.appendChild(itemElement);
            playerStatus['inventory'].push(item.name);
        })
    },
    takeAwayItems: (items) => {
        items.forEach(function (item) {
        var itemIndex = playerStatus['inventory'].indexOf(item.name);
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
        var hasNecessaryItems = true;
        const requiredItems = action.requiredItems;
        requiredItems.forEach(function (item) {
            if (playerStatus['inventory'].indexOf(item) === -1) {
                hasNecessaryItems = false
            }
        });
        if (!hasNecessaryItems) {
            return
        }
    }
    const option = document.createElement('li');
    option.textContent = action.actionDescription;
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
    var image = document.createElement('img');
    image.classList.add('image');
    image.src = scene.image;
    picture.appendChild(image);
};

const renderScene = function (id){
    const scene = scenes[id];
    description.textContent = scene.description;
    renderPicture(scene);
    killChildren(options);
    for (var option in scene.actions) {
        renderOption(scene.actions[option]);
    }
};

renderScene('bedScene');