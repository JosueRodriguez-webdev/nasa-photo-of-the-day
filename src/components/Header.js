import React from "react";
import Randomdata from "./Randomdata";
import Button from "./Button";
import Body from "./Body";

export default function Header(props) {
  //console.log(`This is the data in the header`, props);

  return (
    <header>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Space Exploration</a>
        <a href="#">Donate</a>
      </div>

      <div>
        <Button dataTransfer={props.dataTransfer} />
      </div>

      <div>
        <Body dataTransfer={props.dataTransfer} />
      </div>
    </header>
  );
}
