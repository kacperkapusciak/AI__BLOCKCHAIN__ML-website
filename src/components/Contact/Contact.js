import React from "react";
import styled from "styled-components";
import Nav from "components/UI/Nav";
import Splash from "components/UI/Splash";
import Footer from "components/UI/Footer";
import { secondary, laptop, desktop } from "components/UI/style-consts";
import logo from "images/ai__blockchain__ml-logo.png";

export default () => (
  <>
    <Nav />
    <Splash contact="contact" />
    <Contact>
      <Wrapper>
        <Title>You do not contact the Dark Brotherhood.</Title>
        <Subtitle>The Dark Brotherhood contacts with you.</Subtitle>
        <h3>and all the contact data is made up so...</h3>
        <Logo src={logo} />
        <ContactData>
          Biała Grań 38 <br /> 30-050 Kraków, Poland <br />
          contact@ai__blockchain__ml.io
        </ContactData>
      </Wrapper>
      <Map
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33477.497422523105!2d19.914241282620655!3d50.058232078799946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1550595788793"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
      />
    </Contact>
    <Footer />
  </>
);

const Contact = styled.section`
  @media (min-width: ${laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Wrapper = styled.div`
  margin: 15px;

  @media (min-width: ${laptop}) {
    align-self: center;
    justify-self: center;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
  color: ${secondary};
  margin-bottom: 10px;

  @media (min-width: ${laptop}) {
    margin-bottom: 30px;
  }
  @media (min-width: ${desktop}) {
    margin-bottom: 40px;
  }
`;

const Subtitle = styled.h2`
  font-size: 20px;
  margin-left: 0;
  font-weight: bold;
  color: ${secondary};
  margin-bottom: 10px;

  @media (min-width: ${laptop}) {
    margin-bottom: 20px;
  }
  @media (min-width: ${desktop}) {
    margin-bottom: 30px;
  }
`;

const Logo = styled.img`
  margin-top: 30px;
  margin-bottom: 5px;
  width: 12em;
`;

const ContactData = styled.p`
  line-height: 1.6;
`;

const Map = styled.iframe`
  margin: 0;
  height: 50vh;
  width: 100%;

  @media (min-width: ${laptop}) {
    height: 90vh;
  }
`;
