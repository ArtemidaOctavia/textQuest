import {effects} from "./effects";
import {playerStatus} from "./playerStatus";
import {specialItems} from "./specialItems";
import {scenes} from "./scenes";
import {skills} from "./skills";
import {items} from "./items";

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

export {paramsMap}