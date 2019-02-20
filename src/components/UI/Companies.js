import React from "react";
import Container from "components/UI/Container";
import styled from "styled-components";
import {
  phone,
  tablet,
  laptop,
  desktop,
  secondary
} from "components/UI/style-consts";

import google from "images/google.png";
import airbnb from "images/airbnb.png";
import microsoft from "images/microsoft.png";
import skyrim from "images/skyrim.png";
import minecraft from "images/minecraft.png";
import cocacola from "images/cocacola.png";

const companies = [google, airbnb, microsoft, skyrim, minecraft, cocacola];

export default () => (
  <Container>
    <Title>Some companies that we've never ever worked with</Title>
    <Flex>
      {companies.map((company, i) => (
        <Image key={`company-${i}`} src={company} />
      ))}
    </Flex>
  </Container>
);

const Title = styled.h2`
  margin: 15px 10px;
  font-size: 20px;
  font-weight: 700;
  color: ${secondary};
  text-align: center;

  @media (min-width: ${tablet}) {
    margin-top: 20px;
    font-size: 20px;
  }
  @media (min-width: ${laptop}) {
    margin-top: 35px;
    margin-bottom: 30px;
    font-size: 24px;
  }
  @media (min-width: ${desktop}) {
    margin-bottom: 50px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin: 10px 15px 10px 15px;
  width: 25%;
  @media (min-width: ${phone}) {
    width: 20%;
    margin: 15px 20px 15px 20px;
  }
  @media (min-width: ${laptop}) {
    width: 25%;
  }
`;
