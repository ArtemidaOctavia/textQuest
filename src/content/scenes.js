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
                actionDescription: "Порыскать по кустам",
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
                actionDescription: "Поискать по огородам",
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
                actionDescription: "Напиться воды",
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

export {scenes}