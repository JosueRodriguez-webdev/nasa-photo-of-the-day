import React from "react";
import Randomdata from "./Randomdata";
import Footer from "./Footer";
import styled from "styled-components";

const Width100 = styled.img`
  border: 5px solid red;
  width: ;
`;

export default function Body(props) {
  //console.log(props);
  return (
    <>
      <body>
        <Width100 src={props.dataTransfer.url} />
      </body>
      <Footer copy={props.dataTransfer.copyright} />
    </>
  );
}
