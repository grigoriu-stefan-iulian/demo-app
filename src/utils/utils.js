export const addEvent = ({ type, target, handler } = event) => {
  const targetElement = document.getElementById(target);
  targetElement.addEventListener(type, handler);
};

export const removeEvent = ({ type, target, handler } = event) => {
  const targetElement = document.getElementById(target);
  targetElement.removeEventListener(type, handler);
};
