const isOpen = (element) => {
  const classlist = element.classList;
  let trigger = true;
  classlist.forEach((elemClass) => {
    if (elemClass === 'hide') {
      trigger = !trigger;
    }
  });
  return trigger;
};
export { isOpen };
