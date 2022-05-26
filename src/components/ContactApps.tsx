import * as React from "react";
import styled from "styled-components";
import SvgWhatsapp from "../icons/Whatsapp";
import SvgEnvelope from "../icons/Envelope";
import SvgTelegram from "../icons/Telegram";
import SvgGitAlt from "../icons/GitAlt";

interface Url {
  email?: string;
  github?: string;
  whatsapp?: string;
}

const url: Url = {
  email: "mailto:gfouz1975@gmail.com",
  github: "https://github.com/gfouz",
  whatsapp: "http://https://api.whatsapp.com/send?phone=+5354278815",
};

interface Props {
  top?: string;
  left?: string;
  size?: string;
  bottom?: string;
  height?: string;
  margin?: string;
  padding?: string;
  svgcolor?: string;
  position?: string;
}
interface Svg {
  size?: string;
  color?: string;
}

function ContactApps(props: Props) {
  const svg: Svg = {
    size: props.size || "30px",
    color: props.svgcolor || "#222222",
  };
  return (
    <>
      <StyledMedia {...props}>
        <ul className="media-list">
          <li className="media-list__item">
            <a href={url.whatsapp}>
              <SvgWhatsapp {...svg} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={url.whatsapp}>
              <SvgTelegram {...svg} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={url.github}>
              <SvgGitAlt {...svg} />
            </a>
          </li>
          <li className="media-list__item">
            <a href={url.email}>
              <SvgEnvelope {...svg} />
            </a>
          </li>
        </ul>
      </StyledMedia>
    </>
  );
}
export default ContactApps;

const StyledMedia = styled.nav`
  width: 100%;
  top: ${(props: Props) => props.top};
  left: ${(props: Props) => props.left};
  bottom: ${(props: Props) => props.bottom};
  margin: ${(props: Props) => props.margin || "0"};
  padding: ${(props: Props) => props.padding || "0"};
  position: ${(props: Props) => props.position};

  .media-list {
    padding: 0;
    width: 100%;
    height: ${(props: Props) => props.height};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .media-list__item {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

