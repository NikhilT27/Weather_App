import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { selectLocationData } from "../features/location/locationSlice";
import IntroImg from "../pics/intro.jpg";

export default function IntroPage() {
  let date = new Date();
  const locationData = useSelector(selectLocationData);
  const [weatherDetail, setWeatherDetail] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:5000/postLocation", locationData)
      .then((response) => setWeatherDetail(response.data));

    console.log(locationData);
    console.log(weatherDetail);
  }, [locationData]);

  return (
    <div className="IntroPage">
      <div className="IntroPage-image">
        <img
          src={IntroImg}
          alt="Girl in a jacket"
          width="450px"
          height="auto"
        />
      </div>
      <div className="IntroPage-currentCity-Box">
        {locationData.location ? (
          <div className="IntroPage-currentCity-data">
            <div className="date-text">
              {new Date(weatherDetail.current.dt * 1000).toLocaleString()}
            </div>
            <div className="timezone-text">{locationData.location}</div>
            <div className="timezone-text">{weatherDetail.timezone}</div>
            <div className="degree-text">{weatherDetail.current.temp} °C</div>
            <div className="feels-text">Feels like</div>
            <div className="weather-more-detail">
              <div className="detail-data">Visibility: 10.0km</div>
              <div className="detail-data">clouds</div>
              <div className="detail-data">wind_speed wind_deg</div>
              <div className="detail-data">Pressure: 1001hPa</div>
              <div className="detail-data">Humidity: 90%</div>
              <div className="detail-data">Dew Point: °C</div>
            </div>
          </div>
        ) : (
          <div>Please select city</div>
        )}
      </div>
    </div>
  );
}
