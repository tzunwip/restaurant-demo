export const createTextBox = (parent, type, classes, text) => {
  const newBox = document.createElement(type);
  newBox.setAttribute("class", classes);
  newBox.textContent = text;
  parent.appendChild(newBox);
  return newBox;
};

export const createSection = (parent, classes) => {
  const newSection = document.createElement("section");
  newSection.setAttribute("class", classes);
  parent.appendChild(newSection);
  return newSection;
};

export const createBox = (parent, classes) => {
  const newBox = document.createElement("div");
  newBox.setAttribute("class", classes);
  parent.appendChild(newBox);
  return newBox;
};

export const createImg = (parent, classes, src) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("class", classes);
  newImg.setAttribute("src", src);
  parent.appendChild(newImg);
  return newImg;
};

export const createFoodCard = (parent, food) => {
  const card = createBox(parent, "food-card");
  card.setAttribute("id", food.id);

  createTextBox(card, "h3", "food-card__title", food.name);
  createTextBox(card, "h4", "food-card__price", food.price);
  createTextBox(card, "p", "food-card__desc", food.desc);
}

export const createNavbar = (parent, name, subElements) => {
  const mainElement = document.createElement("nav");
  mainElement.setAttribute("class", `navbar ${name}` );
  mainElement.setAttribute("role", "navigation");

  const elementArray = [];

  subElements.forEach((obj) => {
    const a = document.createElement("a");
    a.setAttribute("class", `${name}__navlink navlink navlink-${obj.class}`);
    a.textContent = obj.text;
    mainElement.appendChild(a);
    elementArray.push(a);
  });

  parent.appendChild(mainElement);
  return elementArray
};