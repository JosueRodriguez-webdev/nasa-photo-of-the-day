import React from "react";
import Randomdata from "./Randomdata";
import Button from "./Button";
import Body from "./Body";
import styled from "styled-components";

const Navbar = styled.a`
  text-decoration: none;
`;

const Navdiv = styled.div`
  width: 50%;
  margin-left: 25%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  font-size: 1.5rem;
`;

export default function Header(props) {
  //console.log(`This is the data in the header`, props);

  return (
    <header>
      <Navdiv>
        <Navbar href="#">Home</Navbar>
        <Navbar href="#">About</Navbar>
        <Navbar href="#">Space Exploration</Navbar>
        <Navbar href="#">Donate</Navbar>
      </Navdiv>

      <div>
        <Button dataTransfer={props.dataTransfer} />
      </div>

      <div>
        <Body dataTransfer={props.dataTransfer} />
      </div>
    </header>
  );
}
