!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=4)}([function(e,r,n){var t=n(1);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};n(3)(t,o);t.locals&&(e.exports=t.locals)},function(e,r,n){(e.exports=n(2)(!1)).push([e.i,'html {\r\n    font-family: "Courier New";\r\n}\r\n\r\nbody {\r\n    background-color: lightgray;\r\n}\r\n\r\n.inventory-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.skills-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.skills-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.inventory-item {\r\n    display: inline-block;\r\n    width: 15%;\r\n    margin: 10px;\r\n    border: 3px solid black;\r\n}\r\n\r\n.inventory-item:hover {\r\n    cursor: pointer;\r\n    color: gray;\r\n    border-color: gray;\r\n}\r\n\r\n.inventory-item-name {\r\n    text-align: center;\r\n}\r\n\r\n.inventory-item-picture {\r\n    width: 100%;\r\n    max-height: 90px;\r\n    text-align: center;\r\n}\r\n\r\n.backToMenu {\r\n    background-color: darkgray;\r\n    float: left;\r\n    clear: both;\r\n    margin-bottom: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.backToMenu:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    color: gray;\r\n}\r\n\r\n.menu {\r\n    height: 600px;\r\n    width: 800px;\r\n    border: 1px solid black;\r\n    background-color: lightgray;\r\n}\r\n\r\n.menu-buttons {\r\n    margin-top: 20%;\r\n    margin-left: 40%;\r\n}\r\n\r\n.menu-button {\r\n    background-color: darkgray;\r\n    display: inline-block;\r\n    float: left;\r\n    clear: both;\r\n    margin-bottom: 30px;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.menu-button:hover {\r\n    cursor: pointer;\r\n    color: gray;\r\n}\r\n\r\n.game-holder {\r\n    height: 800px;\r\n    width: 1220px;\r\n    margin: 5px;\r\n}\r\n\r\n.left-side-holder {\r\n    position: absolute;\r\n    display: inline-block;\r\n\r\n    height: 99%;\r\n    width: 46%;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.right-side-holder {\r\n    left: 47%;\r\n    position: absolute;\r\n    display: inline-block;\r\n\r\n    height: 99%;\r\n    width: 51%;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.description-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.description {\r\n    padding: 10px;\r\n}\r\n\r\n.options-holder {\r\n    height: 37%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.illustration-holder {\r\n    height: 69%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n.status-holder {\r\n    height: 26%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.options {\r\n\r\n}\r\n\r\n.option {\r\n    background-color: darkgray;\r\n    display: inline-block;\r\n    float: left;\r\n    clear: both;\r\n    margin-bottom: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.option:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    color: gray;\r\n}\r\n\r\n.image {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.status-button {\r\n    display: inline-block;\r\n    clear: none;\r\n    margin: 5px;\r\n}\r\n\r\n.indicator {\r\n    display: block;\r\n    clear: both;\r\n    margin-left: 5px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}',""])},function(e,r,n){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=function(e,r){var n=e[1]||"",t=e[3];if(!t)return n;if(r&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(r,e);return r[2]?"@media ".concat(r[2],"{").concat(n,"}"):n})).join("")},r.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&t[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),r.push(c))}},r}},function(e,r,n){"use strict";var t,o={},i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}();function c(e,r){for(var n=[],t={},o=0;o<e.length;o++){var i=e[o],a=r.base?i[0]+r.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(c):n.push(t[a]={id:a,parts:[c]})}return n}function s(e,r){for(var n=0;n<e.length;n++){var t=e[n],i=o[t.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(g(t.parts[a],r))}else{for(var c=[];a<t.parts.length;a++)c.push(g(t.parts[a],r));o[t.id]={id:t.id,refs:1,parts:c}}}}function l(e){var r=document.createElement("style");if(void 0===e.attributes.nonce){var t=n.nc;t&&(e.attributes.nonce=t)}if(Object.keys(e.attributes).forEach((function(n){r.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(r);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var d,h=(d=[],function(e,r){return d[e]=r,d.filter(Boolean).join("\n")});function p(e,r,n,t){var o=n?"":t.css;if(e.styleSheet)e.styleSheet.cssText=h(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function u(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,m=0;function g(e,r){var n,t,o;if(r.singleton){var i=m++;n=f||(f=l(r)),t=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(r),t=u.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=i());var n=c(e,r);return s(n,r),function(e){for(var t=[],i=0;i<n.length;i++){var a=n[i],l=o[a.id];l&&(l.refs--,t.push(l))}e&&s(c(e,r),r);for(var d=0;d<t.length;d++){var h=t[d];if(0===h.refs){for(var p=0;p<h.parts.length;p++)h.parts[p]();delete o[h.id]}}}}},function(e,r,n){"use strict";n.r(r);n(0);const t=e=>{const r=e.classList;let n=!0;return r.forEach(e=>{"hide"===e&&(n=!n)}),n},o={inventory:[],skills:[],damage:0,fatigue:0,hunger:0,thirst:0,location:""},i={damage:100,fatigue:15,hunger:15,thirst:10},a={damage:0,fatigue:0,hunger:0,thirst:0},c={findRiver:{name:"Найти реку",src:"https://i.ibb.co/YyV7ZfD/compass.jpg",effects:{moveTo:"riverScene",changeNeeds:{hunger:1,thirst:1,fatigue:1}}}},s=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},l={woodScene:{description:"Лес — экологическая система, биоценоз, в которой главной жизненной формой являются деревья Лес — составная часть природы, понятие «лес» можно рассматривать на разных уровнях. В глобальном масштабе — это часть биосферы, в локальном — это может быть насаждение. Лес также можно рассматривать как природно-зональное подразделение, как провинциальное подразделение, как лесной массив (Шипов лес, Шатилов лес, Чёрный лес), как экосистему. Леса занимают около трети площади суши, площадь леса на Земле составляет 38 млн км² Из них 264 млн га, или 7 %, посажены человеком к началу XXI века человек уничтожил около 50 % площадей лесов, ранее существовавших на планете. Половина лесной зоны принадлежит тропическим лесам. Площади, занятые деревьями с сомкнутостью крон менее 0,2—0,3, считаются редколесьем.",image:"https://i.ibb.co/mD7WjyV/wood.jpg",actions:{forward:{actionDescription:"Идти вперёд",effects:[{type:"moveForward",payload:"randomDirection"},{type:"changeNeeds",payload:{fatigue:1,thirst:1,hunger:1}}]},rest:{actionDescription:"Отдохнуть",effects:[{type:"changeNeeds",payload:{fatigue:-4,thirst:1,hunger:1}}]},search:{actionDescription:"Порыскать по кустам",effects:[{type:"changeNeeds",payload:{fatigue:2,thirst:2,hunger:1}},{type:"getItems",payload:{hazelnut:[0,2],mushroom:[0,1]}}]}}},gardenScene:{description:"Огород — относительно небольшой участок земли, предназначенный преимущественно для выращивания овощей. На огороде могут также присутствовать посадки ягод и плодовых деревьев. Обычно огород огорожен забором или живой изгородью. На выбранном участке также допускается применение парников и теплиц. Возделывание огородов называется огородничеством.",image:"https://i.ibb.co/h8kfBtT/garden.jpg",actions:{forward:{actionDescription:"Идти вперёд",effects:[{type:"moveForward",payload:"randomDirection"},{type:"changeNeeds",payload:{fatigue:1,thirst:1,hunger:1}}]},rest:{actionDescription:"Отдохнуть",effects:[{type:"changeNeeds",payload:{fatigue:-4,thirst:1,hunger:1}}]},search:{actionDescription:"Поискать по огородам",effects:[{type:"changeNeeds",payload:{fatigue:1,thirst:1,hunger:1}},{type:"getItems",payload:{fishingRod:[0,1],food:[0,2],emptyBottle:[0,1]}}]}}},riverScene:{description:"Река — природный водный поток значительных размеров с естественным течением по руслу (выработанному им естественному углублению) от истока вниз до устья[2] и питающийся за счёт поверхностного и подземного стока с его бассейна. Реки являются составной частью гидрологического цикла. Вода в реке, как правило, собирается с поверхностных стоков, образующихся в результате атмосферных осадков с определённой площади, ограниченной водоразделом (бассейн реки), а также из других источников, например запасов подземных вод, влаги, хранящейся в естественном льду (в процессе таяния ледников) и снеговом покрове. В местах естественных или искусственных препятствий течению реки появляются водохранилища (проточные озёра либо искусственные моря). Лимноло́гия (греч. λίμνε — озеро, λόγος — учение) или озерове́дение — раздел гидрологии, наука о физических, химических и биологических аспектах озёр и других пресных водоёмов, в том числе и водохранилищ. В свою очередь реки являются предметом одного из крупнейших разделов гидрологии суши — речной гидрологии или потамоло́гии (от др.-греч. ποταμός — река, λόγος — учение — буквально наука о реках), которая занимается изучением строения речных сетей, стока рек, морфометрией речных бассейнов и так далее. Как правило, реки прокладывают свой путь и текут по зонам наименьшего напряжения и сопротивления — по тектоническим разломам.",image:"https://i.ibb.co/Cv46J0Y/river.jpg",actions:{forward:{actionDescription:"Идти вперёд",effects:[{type:"moveForward",payload:"randomDirection"},{type:"changeNeeds",payload:{fatigue:1,thirst:1,hunger:1}}]},rest:{actionDescription:"Отдохнуть",effects:[{type:"changeNeeds",payload:{fatigue:-4,thirst:1,hunger:1}}]},search:{actionDescription:"Напиться воды",effects:[{type:"changeNeeds",payload:{fatigue:1,hunger:1,thirst:-15}}]}}},youDiedScene:{description:"Смерть (гибель, кончина) — прекращение, полная остановка биологических и физиологических процессов жизнедеятельности организма. В медицине изучением смерти занимается наука танатология. В естественной среде после смерти тела умерших организмов начинают разлагаться. Смерть всегда несла отпечаток таинственности и мистичности. Непредсказуемость, неизбежность, неожиданность и подчас незначительность причин, приводящих к смерти, выводили само понятие смерти за пределы человеческого восприятия. Многие религии превращали смерть в божественную кару за греховное существование либо в божественный дар, после которого человека ожидает счастливая и вечная жизнь (чаще всего понятие «смерть» люди применяют по отношению к своему виду).",image:"https://i.ibb.co/485c7pc/youDied.jpg",actions:{newGame:{actionDescription:"Новая игра",effects:[{type:"startNewGame"}]},menu:{actionDescription:"Главное меню",effects:[{type:"backToMainMenu"},{type:"startNewGame"}]}}}},d=(e="div",r,n,t,o)=>{const i=document.createElement(e);return r&&(i.textContent=r),n&&(i.id=n),t&&(i.src=t),o&&i.classList.add(o),i},h=document.querySelector(".description"),p=document.querySelector(".options"),u=document.querySelector(".illustration-holder"),f=document.querySelector(".new-game"),m=document.querySelector(".menu"),g=document.querySelector(".game-holder"),b=document.querySelector(".about-project"),y=document.querySelector(".menu-buttons"),v=document.querySelector(".project-information"),x=document.querySelector(".backToMenu"),k=document.querySelector(".damage"),w=document.querySelector(".fatigue"),S=document.querySelector(".hunger"),j=document.querySelector(".thirst"),L=document.querySelector(".inventory-button"),I=document.querySelector(".skills-button"),N=document.querySelector(".description-holder"),C=document.querySelector(".inventory-holder"),M=document.querySelector(".skills-holder"),E=e=>{const r=l[e];h.textContent=r.description,(e=>{s(u);const r=d("img","","",e.image);r.classList.add("image"),u.appendChild(r)})(r),s(p),Object.keys(r.actions).forEach(e=>{(e=>{const r=d("li",e.actionDescription);r.classList.add("option"),r.addEventListener("click",()=>{e.effects.forEach(e=>{_[e.type](e.payload)})}),p.appendChild(r)})(r.actions[e])})},D={damage:[{threshold:75,label:"при смерти",colorIndicator:"red"},{threshold:50,label:"покоцан",colorIndicator:"orange"},{threshold:25,label:"подбит",colorIndicator:"yellow"},{threshold:0,label:"здоров",colorIndicator:"green"}],fatigue:[{threshold:0,label:"бодр",colorIndicator:"green"},{threshold:4,label:"подустал",colorIndicator:"yellow"},{threshold:8,label:"устал",colorIndicator:"orange"},{threshold:12,label:"измотан",colorIndicator:"red"}],hunger:[{threshold:0,label:"сыт",colorIndicator:"green"},{threshold:4,label:"проголодался",colorIndicator:"yellow"},{threshold:8,label:"урчит в животе",colorIndicator:"orange"},{threshold:12,label:"голоден",colorIndicator:"red"}],thirst:[{threshold:0,label:"Нагидрирован",colorIndicator:"green"},{threshold:4,label:"Недогидрирован",colorIndicator:"yellow"},{threshold:6,label:"Не нагидрирован",colorIndicator:"orange"},{threshold:9,label:"Дегидрирован",colorIndicator:"red"}]},q=(e,r)=>{D[e].forEach(n=>{o[e]>=n.threshold&&(r.textContent=n.label,r.style.color=n.colorIndicator)})},O=()=>{q("damage",k),q("fatigue",w),q("thirst",j),q("hunger",S)},T=e=>{const r=d("div","",e.id,"","inventory-item");r.appendChild(d("img","","",e.src,"inventory-item-picture")),r.appendChild(d("div",e.name,"","","inventory-item-name")),C.appendChild(r),r.addEventListener("click",()=>{Object.keys(e.effects).forEach(r=>{_[r](e.effects[r])}),e.consumable&&_.takeAwayItems([e])})},B=e=>e[Object.keys(e)[Math.floor(Math.random()*Math.floor(Object.keys(e).length))]],R={apple:{name:"Сытное яблочко",id:"apple",src:"https://i.ibb.co/K7D7Jjn/apple.jpg",consumable:!0,effects:{changeNeeds:{hunger:-2}}},food:{name:"Вкуснейший супец",id:"food",src:"https://i.ibb.co/H7bqV3R/food.jpg",consumable:!0,effects:{changeNeeds:{hunger:-2}}},mushroom:{name:"Съедобный грибочек",id:"mushroom",src:"https://i.ibb.co/1LZgZbn/mushroom.jpg",consumable:!0,effects:{changeNeeds:{hunger:-2}}},hazelnut:{name:"Лесной орешек",id:"hazelnut",src:"https://i.ibb.co/b3jmR3k/hazelnut.jpg",consumable:!0,effects:{changeNeeds:{hunger:-2}}},fullBottle:{name:"Полная бутылка",id:"fullBottle",src:"https://i.ibb.co/NV2zCNr/full-Bottle.jpg",specific:!0,consumable:!0,effects:{changeNeeds:{fatigue:-1,thirst:-2},getItems:{emptyBottle:1}}},emptyBottle:{name:"Пустая бутылка",id:"emptyBottle",src:"https://i.ibb.co/pvKYzJR/empty-Bottle.jpg",consumable:!0,effects:{getItems:{fullBottle:1},changeNeeds:{fatigue:2,thirst:1}}},roach:{name:"Плотва",id:"roach",src:"http://www.fishinginireland.info/images/coarse/roach.jpg",consumable:!0,specific:!0,effects:{changeNeeds:{hunger:-2}}},fishingRod:{name:"Удочка",id:"fishingRod",src:"https://i5.walmartimages.com/asr/30881e20-ce61-4778-a949-39b088fd6009_1.497868596fdf88bc6936ff4c19b3cfee.jpeg",effects:{getItems:{roach:[0,2]},changeNeeds:{fatigue:2,thirst:1,hunger:1}}}},A={inventory:[],skills:[],damage:0,fatigue:0,hunger:0,thirst:0,location:""},z=()=>{for(;o.inventory.length>15;)o.inventory.pop(),C.removeChild(C.lastChild)},_={getItems:({...e})=>{Object.entries(e).forEach(([e,r])=>{const n=Array.isArray(r)?((e=1,r=20)=>Math.floor(e+Math.random()*(r+1-e)))(...r):r;for(let r=1;r<=n;r+=1){const r="randomItem"===e?B(R):R[e];o.inventory.push(r.name),T(r),z()}})},takeAwayItems:e=>{e.forEach(({name:e,id:r})=>{const n=o.inventory.indexOf(e);o.inventory.splice(n,1),document.getElementById(r).remove()})},moveTo:e=>{E(e),(e=>{o.location=e})(e)},changeNeeds:({...e})=>{Object.entries(e).forEach(([e,r])=>{o[e]+=r,o[e]=o[e]<=a[e]?a[e]:o[e]}),O(),Object.keys(i).some(e=>{o[e]>=i[e]&&E("youDiedScene")})},moveForward:()=>{E((()=>{const e=["woodScene","riverScene","gardenScene"];return e[Math.floor(Math.random()*Math.floor(e.length))]})())},startNewGame:()=>{Object.keys(o).forEach(e=>{o[e]=Array.isArray(o[e])?[]:A[e]}),s(C),s(M),E("woodScene"),O(),_.getItems({randomItem:1}),_.getSkill("findRiver")},backToMainMenu:()=>{m.classList.remove("hide"),g.classList.add("hide")},getSkill:e=>{const r=c[e];o.skills.push(r.name),(e=>{const r=d("div","","","","inventory-item");r.appendChild(d("img","","",e.src,"inventory-item-picture")),r.appendChild(d("div",e.name,"","","inventory-item-name")),r.addEventListener("click",()=>{Object.keys(e.effects).forEach(r=>{_[r](e.effects[r])})}),M.appendChild(r)})(r)}};b.addEventListener("click",()=>{y.classList.add("hide"),v.classList.remove("hide"),x.classList.remove("hide")}),f.addEventListener("click",()=>{_.startNewGame(),m.classList.add("hide"),g.classList.remove("hide")}),x.addEventListener("click",()=>{y.classList.remove("hide"),v.classList.add("hide"),x.classList.add("hide")}),I.addEventListener("click",()=>{t(M)?(N.classList.remove("hide"),C.classList.add("hide"),M.classList.add("hide")):(M.classList.remove("hide"),N.classList.add("hide"),C.classList.add("hide"))}),L.addEventListener("click",()=>{t(C)?(N.classList.remove("hide"),C.classList.add("hide"),M.classList.add("hide")):(N.classList.add("hide"),C.classList.remove("hide"),M.classList.add("hide"))})}]);