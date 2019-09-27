const description = document.querySelector('.description');
const options = document.querySelector('.options');
const inventory = document.querySelector('.inventory');
const picture = document.querySelector('.illustration_holder')
var inventoryArray = [];
const obj = {
        // scene name = id //
        bedScene: {
            description: 'А не прогуляться ли по этому беспределу?',
            image: "pictures/bed.jpg",
            actions: {
                standUp: {
                    actionDescription: "Встать",
                    way: "roomScene",
                },
                lookAround: {
                    actionDescription: "Пошариться",
                    way: "dualsScene",
                    receiveItems: {
                        'Коронный': 'crown',
                        'Похоронный': 'funeral'
                    }
                }
            }
        },
        dualsScene: {
            description: 'Две штуки',
            image: "pictures/duals.jpg",
            actions: {
                back: {
                    actionDescription: "Назад",
                    way: "bedScene",
                }
            }
        },
        roomScene: {
            description: 'Или не прогуляться?',
            image: 'pictures/room.jpg',
            actions: {
                lieDown: {
                    actionDescription: "Лечь обратно",
                    way: "bedScene"
                },
                goOutside: {
                    actionDescription: "Выйти из комнаты",
                    way: "hallScene"
                }
            }
        },
        hallScene: {
            description: 'Темновато, но я в лом свет включать, чтобы фоткать',
            image: 'pictures/hall.jpg',
            actions: {
                back: {
                    actionDescription: "Назад",
                    way: "roomScene"
                },
                left: {
                    actionDescription: "В комнату слева",
                    way: "batyaScene"
                },
                right: {
                    actionDescription: "В комнату справа",
                    way: "corridorScene"
                }
            }
        },
        batyaScene: {
            description: 'Туда только если с дуалами',
            image: 'pictures/batya.jpg',
            actions: {
                back: {
                    actionDescription: "Стремительно ретироваться",
                    way: 'hallScene'
                },
                enter: {
                    actionDescription: "Войти",
                    way: "youDiedScene",
                    requiredItems: ['Похоронный', 'Коронный'],
                    lossItems: {
                        'Коронный': 'crown',
                        'Похоронный': 'funeral'
                    },
                }
            }
        },
        youDiedScene: {
            description: 'АГРХРАХРАХРАХХХХХГГХХ',
            image: 'pictures/youdied.jpg',
            actions: {
                again: {
                    actionDescription: 'Заново',
                    way: 'bedScene',
                }
            },
        },
        corridorScene: {
            description: 'Ох и наебался я, чтобы это всё заработало',
            image: 'pictures/corridor.jpg',
            actions: {
                back : {
                    actionDescription: 'Назад',
                    way: 'hallScene'
                },
                toilet : {
                    actionDescription: 'В туалет',
                    way: 'morrowindScene'
                },
                kitchen : {
                    actionDescription: 'На кухню',
                    way: 'kitchenScene'
                }
            },
        },
        morrowindScene: {
            description: 'Не, сюда, наверное, не надо',
            image: 'pictures/morrowind.jpg',
            actions: {
                back: {
                    actionDescription: 'Назад',
                    way: 'corridorScene'
                }
            }
        },
        kitchenScene: {
            description: 'О боже, да тут же кошечка!',
            image: 'pictures/kitchen.jpg',
            actions: {
                back: {
                    actionDescription: 'Назад',
                    way: 'corridorScene'
                },
                pet : {
                    actionDescription: 'Приласкать :3',
                    way: 'pettingScene'
                }
            }
        },
        pettingScene: {
            description: 'Кошечка в замешательстве, пора ливать писать код',
            image: 'pictures/pet_catze.jpg',
            actions: {
                getCuted: {
                    actionDescription: 'Оуу :3',
                    way: 'kitchenScene'
                }
            }
        },
        testScene: {
            description: 'test',
            image: 'pictures/pet_catze.jpg',
            actions: {
                doThing: {
                    actionDescription: 'Углубиться',
                    way: 'pettingScene',
                    requiredItems: ['Разум'],
                    lossItems: {
                        'Разум' : 'mind'
                    },
                    receiveItems: {
                        'Расстройство' : 'disorder'
                    }

                },
                doAnotherThing: {
                    actionDescription: 'Преисполниться',
                    way: 'testScene',
                    receiveItems: {
                        'Разум' : 'mind'
                    }
                }
            }
        }

};

const renderOption = function (action) {
    if (action.requiredItems) {
        var hasNecessaryItems = true;
        const requiredItems = action.requiredItems;
        requiredItems.forEach(function (item) {
            if (inventoryArray.indexOf(item) === -1) {
                hasNecessaryItems = false
            }
        });
        if (hasNecessaryItems === false) {
            return
        }
    }
    const option = document.createElement('li');
    option.textContent = action.actionDescription;
    option.classList.add('option');
    option.addEventListener('click', function(){
        for (item in action.receiveItems) {
            giveItems(item, action.receiveItems[item]);
        }
        for (item in action.lossItems) {
            takeAwayItems(item, action.lossItems[item]);
        }
        renderScene(action.way);
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

const giveItems = function (itemName, id) {
    var haveItem = false;
    inventoryArray.forEach(function (element){
        if (itemName === element) {
            haveItem = true;
        }
    });
    if (haveItem === true) {
        return;
    }
    const item = document.createElement('li');
    item.textContent = itemName;
    item.id = id;
    inventory.appendChild(item);
    inventoryArray.push(itemName);
};

const takeAwayItems = function (itemName, id) {
    var itemIndex = inventoryArray.indexOf(itemName);
    inventoryArray.splice(itemIndex, 1);
    document.getElementById(id).remove();
};

const renderScene = function (id){
    const scene = obj[id];
    description.textContent = scene.description;
    renderPicture(scene);
    killChildren(options);
    for (var option in scene.actions) {
        renderOption(scene.actions[option]);
    }
};

renderScene('bedScene');