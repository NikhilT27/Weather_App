const axios = require("axios");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {});

app.post("/postLocation", (req, res) => {
  let { location, lat, lon } = req.body;
  console.log(`app.post = ${location}`);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=${process.env.API_KEY}`
    )
    .then((response) => {
      let data = response.data;
      res.send(data);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
