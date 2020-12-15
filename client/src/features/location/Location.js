import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeLocation, selectLocationData } from "./locationSlice";
import IndianCities from "../../data/India.json";

export default function Location() {
  const locationData = useSelector(selectLocationData);
  const dispatch = useDispatch();

  return (
    <div className="Location">
      <div>
        <div className="select-major-city">Select One City</div>
        <div className="Location-scroll">
          <div className="each-city-data">
            {IndianCities.map((data) => {
              return (
                <div key={data.city + 123} className="each-city">
                  <button
                    className="each-city-button"
                    onClick={() => {
                      dispatch(
                        changeLocation({
                          location: data.city,
                          lat: data.lat,
                          lon: data.lng,
                        })
                      );
                    }}
                  >
                    {data.city}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
