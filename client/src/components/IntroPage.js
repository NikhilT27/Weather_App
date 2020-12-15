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
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    try {
      axios
        .post("http://localhost:5000/postLocation", locationData)
        .then((response) => setWeatherDetail(response.data));
    } catch (error) {
      console.log(error);
    }

    console.log(locationData);
    console.log(weatherDetail);

    return () => {
      source.cancel();
    };
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
        {locationData.location && weatherDetail ? (
          <div className="IntroPage-currentCity-data">
            <div className="timezone-text">{locationData.location}</div>
            <div className="date-text">
              {new Date(weatherDetail.current.dt * 1000).toLocaleString()}
            </div>
            <div className="timezone-text">{weatherDetail.timezone}</div>
            <div className="degree-text">{weatherDetail.current.temp} °C</div>
            <div className="feels-text">
              {weatherDetail.current.feels_like} °C
              {weatherDetail.current.weather.map((each_data) => {
                return (
                  <div key={each_data.id}>
                    <div className="capitalize-text">
                      {each_data.description}
                    </div>
                    <img
                      src={`http://openweathermap.org/img/wn/${each_data.icon}@2x.png`}
                    ></img>
                  </div>
                );
              })}
            </div>
            <div className="weather-more-detail">
              <div className="detail-data">
                Visibility: {weatherDetail.current.visibility / 1000}km
              </div>
              <div className="detail-data">{weatherDetail.current.clouds}</div>
              <div className="detail-data">
                {weatherDetail.current.wind_deg}
                {weatherDetail.current.wind_speed}
              </div>
              <div className="detail-data">
                Pressure: {weatherDetail.current.pressure} hPa
              </div>
              <div className="detail-data">
                Humidity: {weatherDetail.current.humidity} %
              </div>
              <div className="detail-data">
                Dew Point: {weatherDetail.current.dew_point}°C
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="exclamation-mark">!!</div>
            <div className="please-select-city">Please select city</div>
          </div>
        )}
      </div>
    </div>
  );
}
