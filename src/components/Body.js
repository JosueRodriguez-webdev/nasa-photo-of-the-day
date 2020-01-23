import React from "react";
import Randomdata from "./Randomdata";
import Footer from "./Footer";

export default function Body(props) {
  console.log(props);
  return (
    <body>
      <img src={props.dataTransfer.url} />
      <Footer copy={props.dataTransfer.copyright} />
    </body>
  );
}
