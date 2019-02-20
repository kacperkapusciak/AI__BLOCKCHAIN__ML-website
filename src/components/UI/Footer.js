import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primary, secondary } from "components/UI/style-consts";

export default () => (
  <Footer>
    Made with <StyledIcon icon="desktop" /> by AI__BLOCKCHAIN__ML
  </Footer>
);

const Footer = styled.footer`
  background: ${primary};
  color: ${secondary};
  font-weight: bold;
  padding: 20px;
  font-size: 12px;
  text-align: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 4px;
  margin-right: 4px;
`;
