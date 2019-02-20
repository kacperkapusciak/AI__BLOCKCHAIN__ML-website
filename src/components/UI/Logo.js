import React from "react";
import styled from "styled-components";
import logo from "images/ai__blockchain__ml-logo.png";
import { phone, tablet, laptop, desktop } from "components/UI/style-consts";

export default () => <Logo src={logo} />;

const Logo = styled.img`
  width: 15em;
  margin: auto;
  @media (min-width: ${phone}) {
    width: 22em;
  }
  @media (min-width: ${tablet}) {
    width: 24em;
  }
  @media (min-width: ${laptop}) {
    width: 32em;
  }
  @media (min-width: ${desktop}) {
    width: 55em;
  }
`;
