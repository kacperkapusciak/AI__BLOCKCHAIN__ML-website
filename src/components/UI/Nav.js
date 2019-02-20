import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { phone, secondary } from "components/UI/style-consts";

export default () => (
  <nav>
    <Wrapper>
      <Btn>
        <StyledNavLink to="/">
          <StyledIcon icon="home" />
          Home
        </StyledNavLink>
      </Btn>
      <Btn>
        <StyledNavLink to="/contact">
          <StyledIcon icon="phone" />
          Contact
        </StyledNavLink>
      </Btn>
    </Wrapper>
  </nav>
);

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  @media (min-width: ${phone}) {
    justify-content: flex-end;
  }
`;

const Btn = styled.li`
  display: inline;
  cursor: pointer;
  padding: 15px;
  @media (min-width: ${phone}) {
    &:last-child {
      padding-right: 0;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  background: #fff;
  color: #000;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 700;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  &:hover {
    background: #eee;
  }
  &:active {
    color: ${secondary};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 7px;
`;
