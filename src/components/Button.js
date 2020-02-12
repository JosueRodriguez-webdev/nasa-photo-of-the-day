import React from "react";
import Header from "./Header";

export default function Button(props) {
  //console.log(props);

  return (
    <div>
      <div>
        <h1>{props.dataTransfer.title}</h1>
        <h3>{props.dataTransfer.date}</h3>
      </div>

      <div>
        <button>Year-</button>
        <button>Year+</button>
      </div>

      <div>
        <button>Month-</button>
        <button>Month+</button>
      </div>

      <div>
        <button>Day-</button>
        <button>Day+</button>
      </div>
    </div>
  );
}
