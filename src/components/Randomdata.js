import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import axios from "axios";

function Randomdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=4O7KVjEDcNJfSsuAZAU8gI8EHbCDYV48hJKLMJaj"
      )
      .then((response) => {
        //console.log(`Success, you got data`, response.data);
        setData(response.data);
      })
      .catch((error) => {
        //console.log(`You got an error`, error);
      });
  }, []);

  return (
    <div>
      <Header dataTransfer={data} setting={setData} />
    </div>
  );
}

export default Randomdata;
