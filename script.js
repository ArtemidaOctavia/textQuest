const description = document.querySelector('.description');
const image = document.querySelector('.image');
const options = document.querySelector('.options');
const inventory = document.querySelector('.inventory');
const obj = {
        // scene name = id //
        bedScene: {
            description: 'А не прогуляться бы по этому беспределу?',
            image: "pictures/bed.jpg",
            actions: {
                'Встать': 'roomScene',
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
            description: 'Не, этого молодого человека лучше не трогать',
            image: 'pictures/batya.jpg',
            actions: {
                'СЪЕБАТЬСЯ В УЖАСЕ' : 'hallScene',
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

const killChildren = function () {
    while (options.firstChild) {
        options.removeChild(options.firstChild);
    }
};

const renderScene = function (id){
    const scene = obj[id];
    description.textContent = scene.description;
    image.src = scene.image;
    killChildren();
    for (var option in scene.actions) {
            renderOption(option, scene.actions[option]);
    }
};

renderScene('bedScene');
