import {createBox, createSection, createTextBox} from "./dom-elements";

export const storySection = (parent) => {
  const wrapper = createBox(parent, "wrapper story-wrapper");
  wrapper.setAttribute("id", "story");

  const section = createSection(wrapper, "story");

  const title = createTextBox(section, "h1", "story__title", "Our story");
  const description = createTextBox(section, "p", "story__desc", `Known as the "last bastion in the Fiat World of classically rich cuisine" The Ace of Space has become a galactic institution, recognised for its culinary excellence and unparalleled attention to detail. When it opened two centuries ago, there was an overwhelming desire for zero-calorie, organic, ethically produced fiat foods. Today, we are an industry leader located in a melting pot of technological and culinary talents. Our proprietary technologies enables you to experience traditional culinary delights without sacrificing your hard-earned social credit rating. We look forward to providing you a wholly ethical and organic experience.`);
}