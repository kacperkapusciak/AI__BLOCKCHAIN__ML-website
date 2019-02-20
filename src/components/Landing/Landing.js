import React from "react";
import Nav from "components/UI/Nav";
import Splash from "components/UI/Splash";
import Companies from "components/Landing/Companies";
import Stock from "components/Landing/Stock";
import Team from "components/Landing/Team";

export default () => (
  <>
    <Nav />
    <Splash />
    <Companies />
    <Stock />
    <Team />
  </>
);
