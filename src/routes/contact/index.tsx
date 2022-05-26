import * as React from "react";
import { breakpoint } from "../../mixins";
import styled from "styled-components";
import Box from "../../components/Box";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import Image from "../../components/Image";
import SpyGlass from "../../icons/SpyGlass";
import Form from "../../components/Form";
import ContactApps from "../../components/ContactApps";
import Headline from "../../components/Headline";
import {
  primaryBox,
  secondaryBox,
  title,
  contactme,
  contactImage,
  subtitle,
  navbar,
  contactApps,
} from "./constants";

function Contact() {

  return (
    <>
      <StyledContact>
        <Section>
          <Box boxProps={primaryBox} column justify="space-between" align="center">
            <Nav {...navbar} />
            <Headline {...title} />
            <div className="message__bottom">
              <p className="message__md">
                "Imagine what a good thing it could be if every single person
                both young and old shared a little of what he is good at doing
                ."
                <br />
                Quince Jones.
              </p>
              <div className="message__sm">
                <Image src="./images/contact.png" />
                <h6>WRITE ME BELOW</h6>
              </div>
            </div>
          </Box>
          <Box boxProps={secondaryBox}  column justify="space-evenly" align="center">
            <div className="message__md">
              <Image {...contactImage} />
            </div>
            <div className="message__top">
              <SpyGlass color="#222222" size="3em" />
            </div>
            <Box column justify="space-evenly" align="center">
              <Headline {...contactme} />
              <Form />
            </Box>
            <ContactApps {...contactApps} />
          </Box>
        </Section>
      </StyledContact>
    </>
  );
}
export default Contact;
const StyledContact = styled.div`
    width: 100%;
    height: 100%;
    font-family: tenorite;
    .message__top {
    position: relative;
    top: 2em;
    text-align: center;
    @media (min-width: ${breakpoint.xmd}){
      display: none;
    }
    }
    .message__bottom {
       padding: 2em;
    }
   .message__sm {
   color: #ffffff; 
   text-align: center;
   @media (min-width: ${breakpoint.xmd}){
      display: none;
   }
   }
   .message__md {
   color: #ffffff; 
   font-family: tenorite;
   @media (max-width: ${breakpoint.xmd}){
    display: none;
   }
`;

