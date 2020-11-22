import {createImg, createNavbar} from "./dom-elements";
import img from "./img/logo.png";

export const generateHeader = (parent) => {
  const header = document.createElement("header");

  const navbar = createNavbar(header, "header-navbar", [
    {class: "welcome", text: ""},
    {class: "story", text: "Story"},
    {class: "menu", text: "Menu"},
    {class: "location", text: "Location"},
    {class: "contact", text: "Contact"},
  ]);

  createImg(navbar[0], "header-icon", img);

  navbar[0].setAttribute("href", "#welcome");
  navbar[1].setAttribute("href", "#story");
  navbar[2].setAttribute("href", "#menu");
  navbar[3].setAttribute("href", "#location");
  navbar[4].setAttribute("href", "#contact");

  parent.appendChild(header);
}