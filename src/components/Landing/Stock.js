import React from "react";
import styled from "styled-components";
import Container from "components/UI/Container";
import Title from "components/UI/Title";
import { tablet, laptop, desktop } from "components/UI/style-consts";

import laptopImg from "images/laptop.jpg";
import monkeyImg from "images/monkey.jpg";
import mountainImg from "images/mountain.jpg";

export default () => (
  <Container>
    <Grid>
      <Card>
        <Title>Stock photos that look professional</Title>
        <Text>
          because this needs to look cool like other startup websites. I know
          that stock photos look awful but I have to put something in here. Look
          how good our product works. Look at this amazing photos. Just lorem
          ipsum it bro.
        </Text>
      </Card>
      <Image src={laptopImg} />
      <Image src={monkeyImg} />
      <Image src={mountainImg} />
    </Grid>
  </Container>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;

  @media (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const Card = styled.div`
  @media (min-width: ${tablet}) {
    width: 70%;
    justify-self: center;
    align-self: center;
  }
`;

const Text = styled.p`
  text-align: justify;
  @media (min-width: ${tablet}) {
    padding: 15px;
  }
  @media (min-width: ${laptop}) {
    padding: 30px;
  }
  @media (min-width: ${desktop}) {
    padding: 40px;
    font-size: 125%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (min-width: ${tablet}) {
    width: 70%;
    justify-self: center;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;
