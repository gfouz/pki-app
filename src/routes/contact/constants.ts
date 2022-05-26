export const title = {
  color: "#ffffff",
  text: "Hello World",
  family: "orangina",
  fontsize: "1.4em",
  space: "5px",
  position: "relative",
  top: "1em",
};
export const contactme = {
  color: "#4a80fc",
  text: "contact me",
  family: "orangina",
  fontsize: "1.2em",
  space: "5px",
  margin: "1em 0",
  transform: "uppercase",
};
export const contactImage = {
  src: "./images/contact.png",
};
export const subtitle = {
  color: "#ffffff",
  text: "gfouz",
  position: "relative",
  bottom: "2em",
};
export const navbar = {
  padding: "2em 0",
};
export const contactApps = {
  size: "20px",
  svgcolor: "#222222",
  padding: "1em 0",
};
export const primaryBox = () => {
  return `width: 100%;
    min-height: 100vh;
    position: relative;
    background-image: url("./images/mount.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;
};
export const secondaryBox = () => {
  return `
    width: 100%;
    min-height: 100vh;
    `;
};
