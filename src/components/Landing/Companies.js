import React from "react";
import Container from "components/UI/Container";
import Title from "components/UI/Title";
import styled from "styled-components";
import { phone, laptop } from "components/UI/style-consts";

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
