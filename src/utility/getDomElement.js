const getDomElement = (tag = 'div', text, id, src, classlist) => {
  const element = document.createElement(tag);
  if (text) { element.textContent = text; }
  if (id) { element.id = id; }
  if (src) { element.src = src; }
  if (classlist) { element.classList.add(classlist); }
  return element;
};

export { getDomElement };
