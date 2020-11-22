import {createBox, createFoodCard, createNavbar, createSection, createTextBox} from "./dom-elements";
import * as foodArray from "./menu-items";

const populateMenu = (parent, foodArray) => {
  parent.textContent = "";

  foodArray.forEach((foodObj) => createFoodCard(parent, foodObj))
}

export const menuSection = (parent) => {
  const wrapper = createBox(parent, "wrapper menu-wrapper");
  wrapper.setAttribute("id", "menu");

  const section = createSection(wrapper, "menu");

  const title = createTextBox(section, "h1", "menu__title", "Menu");
  const menuNav = createNavbar(section, "menu__navbar menu-navbar", [
    {class: "burgers", text: "Burgers"},
    {class: "sides", text: "Sides"},
    {class: "drinks", text: "Drinks"},
    {class: "dessert", text: "Dessert"},
  ]);
  const menuContent = createBox(section, "menu__content");
  const comment = createTextBox(section, "p", "menu__sats-comment", "* all items priced in sats");
  
  const populateBurgers = () => {
    populateMenu(menuContent, foodArray.burgers);
    createTextBox(menuContent, "p", "menu__burger-comment", "All burger patties are 8oz, unless otherwise stated");
  }
  
  menuNav[0].addEventListener("click", () => populateBurgers());
  menuNav[1].addEventListener("click", () => populateMenu(menuContent, foodArray.sides));
  menuNav[2].addEventListener("click", () => populateMenu(menuContent, foodArray.drinks));
  menuNav[3].addEventListener("click", () => populateMenu(menuContent, foodArray.dessert));
  
  // initial load
  populateBurgers();
}