import React from "react";
import Randomdata from "./Randomdata";
import Body from "./Body";
import styled from "styled-components";

const Footerdiv = styled.div`
  font-size: 2rem;
  margin-bottom: 3%;
`;

export default function Footer(props) {
  console.log(props);
  return <Footerdiv>Copyright: {props.copy}</Footerdiv>;
}
