!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=4)}([function(e,n,r){var t=r(1);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(3)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(2)(!1)).push([e.i,'html {\r\n    font-family: "Courier New";\r\n}\r\n\r\nbody {\r\n    background-color: lightgray;\r\n}\r\n\r\n.inventory-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.skills-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.skills-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.inventory-item {\r\n    display: inline-block;\r\n    width: 15%;\r\n    margin: 10px;\r\n    border: 3px solid black;\r\n}\r\n\r\n.inventory-item:hover {\r\n    cursor: pointer;\r\n    color: gray;\r\n    border-color: gray;\r\n}\r\n\r\n.inventory-item-name {\r\n    text-align: center;\r\n}\r\n\r\n.inventory-item-picture {\r\n    width: 100%;\r\n    max-height: 90px;\r\n    text-align: center;\r\n}\r\n\r\n.backToMenu {\r\n    background-color: darkgray;\r\n    float: left;\r\n    clear: both;\r\n    margin-bottom: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.backToMenu:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    color: gray;\r\n}\r\n\r\n.menu {\r\n    height: 600px;\r\n    width: 800px;\r\n    border: 1px solid black;\r\n    background-color: lightgray;\r\n}\r\n\r\n.menu-buttons {\r\n    margin-top: 20%;\r\n    margin-left: 40%;\r\n}\r\n\r\n.menu-button {\r\n    background-color: darkgray;\r\n    display: inline-block;\r\n    float: left;\r\n    clear: both;\r\n    margin-bottom: 30px;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.menu-button:hover {\r\n    cursor: pointer;\r\n    color: gray;\r\n}\r\n\r\n.game-holder {\r\n    height: 800px;\r\n    width: 1220px;\r\n    margin: 5px;\r\n}\r\n\r\n.left-side-holder {\r\n    position: absolute;\r\n    display: inline-block;\r\n\r\n    height: 99%;\r\n    width: 46%;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.right-side-holder {\r\n    left: 47%;\r\n    position: absolute;\r\n    display: inline-block;\r\n\r\n    height: 99%;\r\n    width: 51%;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.description-holder {\r\n    height: 58%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.description {\r\n    padding: 10px;\r\n}\r\n\r\n.options-holder {\r\n    height: 37%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.illustration-holder {\r\n    height: 69%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n.status-holder {\r\n    height: 26%;\r\n    width: 95%;\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.options {\r\n\r\n}\r\n\r\n.option {\r\n    background-color: darkgray;\r\n    display: inline-block;\r\n    float: left;\r\n    clear: both;\r\n    margin-bottom: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.option:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    color: gray;\r\n}\r\n\r\n.image {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.status-button {\r\n    display: inline-block;\r\n    clear: none;\r\n    margin: 5px;\r\n}\r\n\r\n.indicator {\r\n    display: block;\r\n    clear: both;\r\n    margin-left: 5px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}',""])},function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=function(e,n){var r=e[1]||"",t=e[3];if(!t)return r;if(n&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot).concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,l;return[r].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(r,"}"):r})).join("")},n.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&t[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="(".concat(c[2],") and (").concat(r,")")),n.push(c))}},n}},function(e,n,r){"use strict";var t,o={},i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}();function c(e,n){for(var r=[],t={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(c):r.push(t[a]={id:a,parts:[c]})}return r}function l(e,n){for(var r=0;r<e.length;r++){var t=e[r],i=o[t.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(g(t.parts[a],n))}else{for(var c=[];a<t.parts.length;a++)c.push(g(t.parts[a],n));o[t.id]={id:t.id,refs:1,parts:c}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var t=r.nc;t&&(e.attributes.nonce=t)}if(Object.keys(e.attributes).forEach((function(r){n.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,h=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,r,t){var o=r?"":t.css;if(e.styleSheet)e.styleSheet.cssText=h(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function u(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,m=0;function g(e,n){var r,t,o;if(n.singleton){var i=m++;r=f||(f=s(n)),t=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=s(n),t=u.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var r=c(e,n);return l(r,n),function(e){for(var t=[],i=0;i<r.length;i++){var a=r[i],s=o[a.id];s&&(s.refs--,t.push(s))}e&&l(c(e,n),n);for(var d=0;d<t.length;d++){var h=t[d];if(0===h.refs){for(var p=0;p<h.parts.length;p++)h.parts[p]();delete o[h.id]}}}}},function(e,n,r){"use strict";r.r(n);r(0);const t=e=>{const n=e.classList;let r=!0;return n.forEach(e=>{"hide"===e&&(r=!r)}),r},o={inventory:[],skills:[],health:100,fatigue:0,hunger:0,thirst:0,location:""},i=0,a=15,c=15,l=10,s={findRiver:{name:"Найти реку",src:"https://i.ibb.co/YyV7ZfD/compass.jpg",effects:{moveTo:"riverScene",changeNeeds:[0,1,1,1]}}},d=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},h={woodScene:{description:"Лес — экологическая система, биоценоз, в которой главной жизненной формой являются деревья Лес — составная часть природы, понятие «лес» можно рассматривать на разных уровнях. В глобальном масштабе — это часть биосферы, в локальном — это может быть насаждение. Лес также можно рассматривать как природно-зональное подразделение, как провинциальное подразделение, как лесной массив (Шипов лес, Шатилов лес, Чёрный лес), как экосистему. Леса занимают около трети площади суши, площадь леса на Земле составляет 38 млн км² Из них 264 млн га, или 7 %, посажены человеком к началу XXI века человек уничтожил около 50 % площадей лесов, ранее существовавших на планете. Половина лесной зоны принадлежит тропическим лесам. Площади, занятые деревьями с сомкнутостью крон менее 0,2—0,3, считаются редколесьем.",image:"https://i.ibb.co/mD7WjyV/wood.jpg",actions:{forward:{actionDescription:"Идти вперёд",effects:[{type:"moveForward",payload:"randomDirection"},{type:"changeNeeds",payload:[0,1,1,1]}]},rest:{actionDescription:"Отдохнуть",effects:[{type:"changeNeeds",payload:[0,-4,1,1]}]},search:{actionDescription:"Порыскать по кустам",effects:[{type:"changeNeeds",payload:[0,3,0,2]},{type:"getItem",payload:[[1,1]]}]}}},gardenScene:{description:"Огород — относительно небольшой участок земли, предназначенный преимущественно для выращивания овощей. На огороде могут также присутствовать посадки ягод и плодовых деревьев. Обычно огород огорожен забором или живой изгородью. На выбранном участке также допускается применение парников и теплиц. Возделывание огородов называется огородничеством.",image:"https://i.ibb.co/h8kfBtT/garden.jpg",actions:{forward:{actionDescription:"Идти вперёд",effects:[{type:"moveForward",payload:"randomDirection"},{type:"changeNeeds",payload:[0,1,1,1]}]},rest:{actionDescription:"Отдохнуть",effects:[{type:"changeNeeds",payload:[0,-4,1,1]}]},search:{actionDescription:"Поискать по огородам",effects:[{type:"changeNeeds",payload:[0,1,1,1]},{type:"getItem",payload:[[1,3]]}]}}},riverScene:{description:"Река — природный водный поток значительных размеров с естественным течением по руслу (выработанному им естественному углублению) от истока вниз до устья[2] и питающийся за счёт поверхностного и подземного стока с его бассейна. Реки являются составной частью гидрологического цикла. Вода в реке, как правило, собирается с поверхностных стоков, образующихся в результате атмосферных осадков с определённой площади, ограниченной водоразделом (бассейн реки), а также из других источников, например запасов подземных вод, влаги, хранящейся в естественном льду (в процессе таяния ледников) и снеговом покрове. В местах естественных или искусственных препятствий течению реки появляются водохранилища (проточные озёра либо искусственные моря). Лимноло́гия (греч. λίμνε — озеро, λόγος — учение) или озерове́дение — раздел гидрологии, наука о физических, химических и биологических аспектах озёр и других пресных водоёмов, в том числе и водохранилищ. В свою очередь реки являются предметом одного из крупнейших разделов гидрологии суши — речной гидрологии или потамоло́гии (от др.-греч. ποταμός — река, λόγος — учение — буквально наука о реках), которая занимается изучением строения речных сетей, стока рек, морфометрией речных бассейнов и так далее. Как правило, реки прокладывают свой путь и текут по зонам наименьшего напряжения и сопротивления — по тектоническим разломам.",image:"https://i.ibb.co/Cv46J0Y/river.jpg",actions:{forward:{actionDescription:"Идти вперёд",effects:[{type:"moveForward",payload:"randomDirection"},{type:"changeNeeds",payload:[0,1,1,1]}]},rest:{actionDescription:"Отдохнуть",effects:[{type:"changeNeeds",payload:[0,-4,1,1]}]},search:{actionDescription:"Напиться воды",effects:[{type:"changeNeeds",payload:[0,1,1,-15]}]}}},youDiedScene:{description:"Смерть (гибель, кончина) — прекращение, полная остановка биологических и физиологических процессов жизнедеятельности организма. В медицине изучением смерти занимается наука танатология. В естественной среде после смерти тела умерших организмов начинают разлагаться. Смерть всегда несла отпечаток таинственности и мистичности. Непредсказуемость, неизбежность, неожиданность и подчас незначительность причин, приводящих к смерти, выводили само понятие смерти за пределы человеческого восприятия. Многие религии превращали смерть в божественную кару за греховное существование либо в божественный дар, после которого человека ожидает счастливая и вечная жизнь (чаще всего понятие «смерть» люди применяют по отношению к своему виду).",image:"https://i.ibb.co/485c7pc/youDied.jpg",actions:{newGame:{actionDescription:"Новая игра",effects:[{type:"startNewGame"}]},menu:{actionDescription:"Главное меню",effects:[{type:"backToMainMenu"},{type:"startNewGame"}]}}}},p=(e="div",n,r,t,o)=>{const i=document.createElement(e);return n&&(i.textContent=n),r&&(i.id=r),t&&(i.src=t),o&&i.classList.add(o),i},u=document.querySelector(".description"),f=document.querySelector(".options"),m=document.querySelector(".illustration-holder"),g=document.querySelector(".new-game"),b=document.querySelector(".menu"),y=document.querySelector(".game-holder"),v=document.querySelector(".about-project"),x=document.querySelector(".menu-buttons"),k=document.querySelector(".project-information"),w=document.querySelector(".backToMenu"),S=document.querySelector(".health"),L=document.querySelector(".fatigue"),j=document.querySelector(".hunger"),N=document.querySelector(".thirst"),I=document.querySelector(".inventory-button"),C=document.querySelector(".skills-button"),M=document.querySelector(".description-holder"),E=document.querySelector(".inventory-holder"),D=document.querySelector(".skills-holder"),q=e=>{const n=h[e];u.textContent=n.description,(e=>{d(m);const n=p("img","","",e.image);n.classList.add("image"),m.appendChild(n)})(n),d(f),Object.keys(n.actions).forEach(e=>{(e=>{const n=p("li",e.actionDescription);n.classList.add("option"),n.addEventListener("click",()=>{e.effects.forEach(e=>{G[e.type](e.payload)})}),f.appendChild(n)})(n.actions[e])})},O={health:[{threshold:25,label:"при смерти",colorIndicator:"red"},{threshold:50,label:"покоцан",colorIndicator:"orange"},{threshold:75,label:"подбит",colorIndicator:"yellow"},{threshold:100,label:"здоров",colorIndicator:"green"}],fatigue:[{threshold:0,label:"бодр",colorIndicator:"green"},{threshold:4,label:"подустал",colorIndicator:"yellow"},{threshold:8,label:"устал",colorIndicator:"orange"},{threshold:12,label:"измотан",colorIndicator:"red"}],hunger:[{threshold:0,label:"сыт",colorIndicator:"green"},{threshold:4,label:"проголодался",colorIndicator:"yellow"},{threshold:8,label:"урчит в животе",colorIndicator:"orange"},{threshold:12,label:"голоден",colorIndicator:"red"}],thirst:[{threshold:0,label:"Нагидрирован",colorIndicator:"green"},{threshold:4,label:"Недогидрирован",colorIndicator:"yellow"},{threshold:6,label:"Не нагидрирован",colorIndicator:"orange"},{threshold:9,label:"Дегидрирован",colorIndicator:"red"}]},T=(e,n)=>{O[e].forEach(r=>{o[e]>=r.threshold&&(n.textContent=r.label,n.style.color=r.colorIndicator)})},R=()=>{T("health",S),T("fatigue",L),T("thirst",N),T("hunger",j)},B=e=>{const n=p("div","",e.id,"","inventory-item");n.appendChild(p("img","","",e.src,"inventory-item-picture")),n.appendChild(p("div",e.name,"","","inventory-item-name")),E.appendChild(n),n.addEventListener("click",()=>{Object.keys(e.effects).forEach(n=>{G[n](e.effects[n])}),e.consumable&&G.takeAwayItems([e])})},_=e=>e[Object.keys(e)[Math.floor(Math.random()*Math.floor(Object.keys(e).length))]],z={apple:{name:"Сытное яблочко",id:"apple",src:"https://i.ibb.co/K7D7Jjn/apple.jpg",consumable:!0,effects:{changeNeeds:[0,0,-2,0]}},food:{name:"Вкуснейший супец",id:"food",src:"https://i.ibb.co/H7bqV3R/food.jpg",consumable:!0,effects:{changeNeeds:[0,0,-2,0]}},mushroom:{name:"Съедобный грибочек",id:"mushroom",src:"https://i.ibb.co/1LZgZbn/mushroom.jpg",consumable:!0,effects:{changeNeeds:[0,0,-2,0]}},hazelnut:{name:"Лесной орешек",id:"hazelnut",src:"https://i.ibb.co/b3jmR3k/hazelnut.jpg",consumable:!0,effects:{changeNeeds:[0,0,-2,0]}},fullBottle:{name:"Полная бутылка",id:"fullBottle",src:"https://i.ibb.co/NV2zCNr/full-Bottle.jpg",specific:!0,consumable:!0,effects:{changeNeeds:[0,-1,0,-2]}},emptyBottle:{name:"Пустая бутылка",id:"emptyBottle",src:"https://i.ibb.co/pvKYzJR/empty-Bottle.jpg",consumable:!0,effects:{getItem:[[1,1],"fullBottle"],changeNeeds:[0,2,0,1]}},roach:{name:"Плотва",id:"roach",src:"http://www.fishinginireland.info/images/coarse/roach.jpg",consumable:!0,specific:!0,effects:{changeNeeds:[0,0,-2,0]}},fishingRod:{name:"Удочка",id:"fishingRod",src:"https://i5.walmartimages.com/asr/30881e20-ce61-4778-a949-39b088fd6009_1.497868596fdf88bc6936ff4c19b3cfee.jpeg",effects:{getItem:[[1,2],"roach"],changeNeeds:[0,1,0,0]}}},F={inventory:[],skills:[],health:100,fatigue:0,hunger:0,thirst:0,location:""},G={getItem:([[e,n],r])=>{const t=e+Math.random()*(n+1-e);for(let e=1;e<=t;e+=1){let e=_(z);for(;e.specific;)e=_(z);for(r&&(e=z[r]),o.inventory.push(e.name),B(e);o.inventory.length>15;)o.inventory.pop(),E.removeChild(E.lastChild)}},takeAwayItems:e=>{e.forEach(({name:e,id:n})=>{const r=o.inventory.indexOf(e);o.inventory.splice(r,1),document.getElementById(n).remove()})},moveTo:e=>{q(e)},changeNeeds:([e,n,r,t])=>{o.health+=e,o.fatigue+=n,o.hunger+=r,o.thirst+=t,o.health>=F.health&&(o.health=F.health),o.fatigue<=F.fatigue&&(o.fatigue=F.fatigue),o.hunger<=F.hunger&&(o.hunger=F.hunger),o.thirst<=F.thirst&&(o.thirst=F.thirst),R(),(o.health<=i||o.fatigue>=a||o.hunger>=c||o.thirst>=l)&&q("youDiedScene")},moveForward:()=>{q((()=>{const e=["woodScene","riverScene","gardenScene"];return e[Math.floor(Math.random()*Math.floor(e.length))]})())},startNewGame:()=>{Object.keys(o).forEach(e=>{o[e]=F[e]}),d(E),d(D),q("woodScene"),R(),G.getItem([[1,1]]),G.getSkill("findRiver")},backToMainMenu:()=>{b.classList.remove("hide"),y.classList.add("hide")},getSkill:e=>{const n=s[e];o.skills.push(n.name),(e=>{const n=p("div","","","","inventory-item");n.appendChild(p("img","","",e.src,"inventory-item-picture")),n.appendChild(p("div",e.name,"","","inventory-item-name")),n.addEventListener("click",()=>{Object.keys(e.effects).forEach(n=>{G[n](e.effects[n])})}),D.appendChild(n)})(n)}};v.addEventListener("click",()=>{x.classList.add("hide"),k.classList.remove("hide"),w.classList.remove("hide")}),g.addEventListener("click",()=>{G.startNewGame(),b.classList.add("hide"),y.classList.remove("hide")}),w.addEventListener("click",()=>{x.classList.remove("hide"),k.classList.add("hide"),w.classList.add("hide")}),C.addEventListener("click",()=>{t(D)?(M.classList.remove("hide"),E.classList.add("hide"),D.classList.add("hide")):(D.classList.remove("hide"),M.classList.add("hide"),E.classList.add("hide"))}),I.addEventListener("click",()=>{t(E)?(M.classList.remove("hide"),E.classList.add("hide"),D.classList.add("hide")):(M.classList.add("hide"),E.classList.remove("hide"),D.classList.add("hide"))})}]);