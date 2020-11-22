import {createBox, createSection, createTextBox} from "./dom-elements";

export const locationSection = (parent) => {
  const wrapper = createBox(parent, "wrapper location-wrapper");
  wrapper.setAttribute("id", "location");

  const section = createSection(wrapper, "location");

  const title = createTextBox(section, "h1", "location__title", "Location");
  const address = createTextBox(section, "p", "location__address", "Block 0\r\nSatoshi's Crater\r\nThe Moon");
  const hours = createTextBox(section, "p", "location__hours", "Dine-in & Fly-thru\r\nOpen 24/7");
  const docking = createTextBox(section, "p", "docking", "Docking available\r\n0.1k sats/tonne/min");
}