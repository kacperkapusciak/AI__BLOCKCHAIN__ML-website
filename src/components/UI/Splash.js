import React from "react";
import styled from "styled-components";
import Logo from "components/UI/Logo";
import {
  phone,
  laptop,
  tablet,
  desktop,
  background,
  primary
} from "components/UI/style-consts";

export default ({contact}) => (
  <SplashSection className={contact}>
    <Splash>
      <Logo />
    </Splash>
  </SplashSection>
);

const Splash = styled.div`
  background: #e83737;
  height: 35vh;
  display: grid;

  @media (min-width: ${phone}) {
    border-radius: 15px;
  }
  @media (min-width: ${laptop}) {
    height: 50vh;
  }
  @media (min-width: ${desktop}) {
    height: 70vh;
  }
`;

const SplashSection = styled.section`
  @media (min-width: ${phone}) {
    width: ${phone}
    background: ${background};
    margin: 0 auto;
  }
  @media (min-width: ${tablet}) {
    width: ${tablet};
  }
  @media (min-width: ${laptop}) {
    width: ${laptop};
    background: ${primary};
    border-radius: 15px;
    &.contact {
      display:none;
    }
  }
  @media (min-width: ${desktop}) {
    width: 100%;
    border-radius: 0;
  }
`;
