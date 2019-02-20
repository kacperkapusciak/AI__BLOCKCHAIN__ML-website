import React from "react";
import styled from "styled-components";
import { phone, laptop, secondary } from "components/UI/style-consts";

import grzesiek from "images/grzesiek.jpeg";
import kacper from "images/kacper.jpeg";
import lukasz from "images/lukasz.png";
import piotr from "images/piotrek.png";

const github = "https://github.com/";
const team = [
  { github: "BIGbadEL", img: grzesiek, name: "Grzesiek" },
  { github: "kacperkapusciak", img: kacper, name: "Kacper" },
  { github: "Blinkuu", img: lukasz, name: "Łukasz" },
  { github: "piotrmoszkowicz", img: piotr, name: "Piotr" }
];

export default () => (
  <Team>
    <Title>Meet the Team</Title>
    <Avatars>
      {team.map(person => (
        <Card key={`team-${person.name}`}>
          <A href={github + person.github}>
            <Image src={person.img} />
            <Name>{person.name}</Name>
          </A>
        </Card>
      ))}
    </Avatars>
  </Team>
);

const Team = styled.section`
  @media (min-width: ${phone}) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${secondary};
  padding-bottom: 20px;
  text-align: center;
`;

const Avatars = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${phone}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${laptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  width: 235px;
  justify-self: center;
  align-self: center;
  margin-top: 30px;

  @media (min-width: ${laptop}) {
    margin-bottom: 50px;
    &:hover {
      box-shadow: 6px 6px 25px #ccc;
      border-radius: 15px 15px 0 0;
    }
  }
`;

const Image = styled.img`
  box-sizing: border-box;
  border-radius: 15px 15px 0 0;
  width: 235px;
  height: 235px;
  border: 1px solid #ccc;
  border-bottom: 0;
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-top: -3px;
  padding: 10px 5px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 0 0 6px 6px;
`;

const A = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;
