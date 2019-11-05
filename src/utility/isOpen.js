const isOpen = (element) => {
    let classlist = element.classList;
    let trigger = true;
    classlist.forEach((element) => {
        if (element === "hide") {
            trigger = !trigger
        }
    });
    return trigger;
};
export {isOpen}