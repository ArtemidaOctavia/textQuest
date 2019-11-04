const isOpen = function (element) {
    let classlist = element.classList;
    let trigger = true;
    classlist.forEach(function (element) {
        if (element === "hide") {
            trigger = !trigger
        }
    });
    return trigger;
};
export {isOpen}