import {createBox, createImg, createSection, createTextBox} from "./dom-elements";
import img from "./img/sats.png";

export const contactSection = (parent) => {
  const wrapper = createBox(parent, "wrapper contact-wrapper");
  wrapper.setAttribute("id", "contact");

  const section = createSection(wrapper, "contact");

  const title = createTextBox(section, "h1", "contact__title", "Contact");
  const tel = createTextBox(section, "p", "contact__tel", "(307) 644-8329");
  const btcImg = createImg(section, "contact__btc-img", img);
  const btc = createTextBox(section, "p", "contact__btc", "3Go6xwZ78dHXFyeDQmyDQDpJ9ZKRyfrCVJ");
}