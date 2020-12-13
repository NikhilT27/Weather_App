import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import IntroPage from "./components/IntroPage";

function App() {
  // const [weatherDetail, setWeatherDetail] = useState({});

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:5000/postLocation", {
  //       location: "Nagpur",
  //       lat: 33.441792,
  //       lon: -94.037689,
  //     })
  //     .then((response) => setWeatherDetail(response.data));
  // }, []);

  // console.log(weatherDetail);
  return (
    <div className="App">
      <NavBar />
      <IntroPage />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
