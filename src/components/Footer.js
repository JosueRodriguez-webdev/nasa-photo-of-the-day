import React from "react";
import Randomdata from "./Randomdata";
import Body from "./Body";

export default function Footer(props) {
  console.log(props);
  return <div>{props.copy}</div>;
}
