import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

// const fetcher = (url) => axios.get(url).then((res) => res.data);
const fetcher = (url) =>
  axios
    .post(url, { location: "Nagpur", lat: 33.441792, lon: -94.037689 })
    .then((res) => res.data);

function App() {
  const { data, error } = useSWR("http://localhost:5000/postLocation", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) {
    return <div>loading...</div>;
  }
  if (data) {
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ads
        </a>
      </header>
    </div>
  );
}

export default App;