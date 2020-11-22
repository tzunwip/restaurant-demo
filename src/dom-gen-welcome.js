import {createBox, createSection, createTextBox} from "./dom-elements";

export const welcomeSection = (parent) => {
  const wrapper = createBox(parent, "wrapper welcome-wrapper");
  wrapper.setAttribute("id", "welcome");
  const section = createSection(wrapper, "welcome");
}