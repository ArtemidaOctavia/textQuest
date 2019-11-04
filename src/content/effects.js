import {items} from "./items";
import {playerStatus} from "./playerStatus";
import {specialItems} from "./specialItems";
import {skills} from "./skills";
import {getRandomKey} from "../utility/getRandomKey";
import {getDomElement} from "../utility/getDomElement";
import {killChildren} from "../utility/killChildren";
import {renderScene} from "../utility/renderScene";
import {changeStatusIndicators} from "../utility/changeStatusIndicators";
import {killPlayer} from "../utility/killPlayer";
import {getRandomDirection} from "../utility/getRandomDirection";

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

export {effects}