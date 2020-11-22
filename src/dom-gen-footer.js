import {createNavbar} from "./dom-elements";

export const generateFooter = (parent) => {
  const footer = document.createElement("footer");

  const navbar = createNavbar(footer, "footer-navbar", [
    {class: "github fab fa-github", text: ""}
    ]);

  navbar[0].setAttribute("href", "https://github.com/tzunwip/restaurant-demo");
  parent.appendChild(footer);
}