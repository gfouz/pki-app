import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  bg?: string;
  color?: string;
  itemOne?: string;
  itemTwo?: string;
  height?: string;
  padding?: string;
  simple?: string;
  align?: string;
  children?: React.ReactNode;
}

function Footer(props: Props) {
  return (
    <>
      <StyledFooter {...props}>{props.children}</StyledFooter>
    </>
  );
}
export default Footer;

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  height: ${(props: Props) => props.height};
  padding: ${(props: Props)=> props.padding || "0"};
  color: ${(props: Props) => props.color};
  background-color: ${(props: Props) => props.bg};
  ${(props: Props) =>
    props.simple &&
    css`
      --full-height: ${(props: Props) => props.height}
      width: 100%;
      position: relative;
      height: var(--full-height);
      line-height: var(--full-height);
      text-align: ${(props: Props) => props.align || "center"};
    `};
`;
