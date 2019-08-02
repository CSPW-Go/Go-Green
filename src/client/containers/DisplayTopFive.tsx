import React, { useState } from "react";
const axios = require("axios");

const DisplayTopFive = (props: any) => {
  const [zipCode, changeZip] = useState(0);
  const [topFive, changeTopFive] = useState(null);

  // function to change zip code in state
  const changeZipInState = event => {
    changeZip(event.target.value);
  };

  // function to fetch top recycling centern
  const giveMeTopFive = () => {
    console.log(zipCode);
    event.preventDefault();
    fetch("http://localhost:5000/yelp", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ zipCode })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => changeTopFive(res))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <span>
          <input type="text" onChange={e => changeZipInState(e)} />
          <input type="submit" onClick={giveMeTopFive} />
        </span>
      </form>
      <div>{topFive}</div>
    </div>
  );
};

export default DisplayTopFive;
