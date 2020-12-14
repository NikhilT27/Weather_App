import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeLocation, selectLocationData } from "./locationSlice";
import IntroPic from "../../pics/intro.jpg";

export default function Location() {
  const locationData = useSelector(selectLocationData);
  const dispatch = useDispatch();

  const sendLocation = () => {
    dispatch(
      changeLocation({ location: "Nagpur", lat: 33.441792, lon: -94.037689 })
    );
    console.log(locationData);
  };

  return (
    <div className="IntroPage">
      <div className="IntroPage-image">
        <img
          src={IntroPic}
          alt="Girl in a jacket"
          width="450px"
          height="auto"
        />
      </div>
      <div className="IntroPage-selectCity">
        <div className="IntroPage-selected">Selected</div>
        <div className="IntroPage-scroll">
          <div>Sroll</div>
          <div>
            <button
              onClick={() => {
                sendLocation();
              }}
            >
              Click to send data
            </button>
          </div>
          <div>Location: {locationData.location}</div>
          <div>Location: {locationData.lat}</div>
          <div>Location: {locationData.lon}</div>
        </div>
      </div>
    </div>
  );
}
