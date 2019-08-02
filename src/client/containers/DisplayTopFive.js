import React, { useState } from "react";

const DisplayTopFive = () => {
  const [zipCode, changeZip] = useState(0);
  const [topFive, changeTopFive] = useState(null);

  // function to change zip code in state
  const changeZipInState = event => {
    changeZip(event.target.value);
  };

  // function to fetch top recycling centern
  const giveMeTopFive = () => {
    event.preventDefault();
    fetch("/yelp", {
      headers: {
        "Content-Type": "application/json",
        zip: zipCode
      }
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
