const description = document.querySelector('.description');
const image = document.querySelector('.image');
const options = document.querySelector('.options');
const inventory = document.querySelector('.inventory');
const illustrationHolder = document.querySelector('.illustration_holder')
var inventoryArray = [];
const obj = {
        // scene name = id //
        bedScene: {
            description: 'А не прогуляться бы по этому беспределу?',
            image: "pictures/bed.jpg",
            actions: {
                'Встать': 'roomScene',
                'Пошариться': 'dualsScene'
            }
        },
        dualsScene: {
            items: {
                'Коронный' : 'crown',
                'Похоронный' : 'funeral'
            },
            description: 'Две штуки',
            image: "pictures/duals.jpg",
            actions: {
                'Назад': 'bedScene'
            }
        },
        roomScene: {
            description: 'Или не прогуляться?',
            image: 'pictures/room.jpg',
            actions: {
                'Лечь обратно' : 'bedScene',
                'Выйти из комнаты' : 'hallScene'
            }
        },
        hallScene: {
            description: 'Темновато, но я ебал свет включать, чтобы фоткать',
            image: 'pictures/hall.jpg',
            actions: {
                'Назад': 'roomScene',
                'В комнату слева': 'batyaScene',
                'В комнату справа': 'corridorScene'
            }
        },
        batyaScene: {
            description: 'Туда только если с дуалами',
            image: 'pictures/batya.jpg',
            actions: {
                'Стремительно ретироваться' : 'hallScene',
            },
            requiredItems: ['Похоронный', 'Коронный'],
            specialActions: {
                'Войти' : 'youDiedScene'
            }
        },
        youDiedScene: {
            description: 'АГРХРАХРАХРАХХХХХГГХХ',
            image: 'pictures/youdied.jpg',
            actions: {
                'Заново': 'bedScene'
            },
            itemsLoss : {
                'Коронный' : 'crown',
                'Похоронный' : 'funeral'
            }
        },
        corridorScene: {
            description: 'Ох и наебался я, чтобы это говнище заработало',
            image: 'pictures/corridor.jpg',
            actions: {
                'Назад' : 'hallScene',
                'В туалет' : 'morrowindScene',
                'На кухню' : 'kitchenScene'
            }
        },
        morrowindScene: {
            description: 'Не, сюда, наверное, не надо',
            image: 'pictures/morrowind.jpg',
            actions: {
                'Назад' : 'corridorScene'
            }
        },
        kitchenScene: {
            description: 'О боже, да тут же кошечка!',
            image: 'pictures/kitchen.jpg',
            actions: {
                'Назад': 'corridorScene',
                'Приласкать :3' : 'pettingScene'
            }
        },
        pettingScene: {
            description: 'Кошечка в замешательстве, пора ливать писать код',
            image: 'pictures/pet_catze.jpg',
            actions: {
                'Оуу :3' : 'kitchenScene'
            }
        }
};

const renderOption = function (text, way) {
    const option = document.createElement('li');
    option.textContent = text;
    option.classList.add('option');
    option.addEventListener('click', function(){
        renderScene(way);
    });
    options.appendChild(option);
};

const renderSpecialOption = function (text, way, scene) {
    var hasNecessaryItems = true;
    const requiredItems = scene.requiredItems;
    requiredItems.forEach(function (item) {
        if (inventoryArray.indexOf(item) === -1) {
            hasNecessaryItems = false
        }
    });
    if (hasNecessaryItems === false) {
        return
    }
    renderOption(text, way)
};

const killChildren = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const renderPicture = function (scene) {
    killChildren(illustrationHolder);
    var image = document.createElement('img');
    image.classList.add('image');
    image.src = scene.image;
    illustrationHolder.appendChild(image);
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
        renderOption(option, scene.actions[option]);
    }
    for (var option in scene.specialActions) {
        renderSpecialOption(option, scene.specialActions[option], scene);
    }
    for (var item in scene.items) {
        giveItems(item, scene.items[item])
    }
    for (var item in scene.itemsLoss) {
        takeAwayItems(item, scene.itemsLoss[item])
    }
};

renderScene('bedScene');