import "./css/normalize.css";
import "./css/style.css";
import "./css/backgrounds.css";
import { generateHeader } from "./dom-gen-header";
import { welcomeSection } from "./dom-gen-welcome";
import { storySection } from "./dom-gen-story";
import { menuSection } from "./dom-gen-menu";
import { locationSection } from "./dom-gen-location";
import { contactSection } from "./dom-gen-contact";
import { generateFooter } from "./dom-gen-footer";

function generateDOM() {
  const _body = document.querySelector("body");
  const _main = document.createElement("main");
  
  generateHeader(_body);
  _body.appendChild(_main);
  welcomeSection(_main);
  storySection(_main);
  menuSection(_main);
  locationSection(_main);
  contactSection(_main);
  generateFooter(_main);
};

generateDOM();