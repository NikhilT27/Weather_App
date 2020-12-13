const axios = require("axios");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=4321754c82d8386987c071756ce895b7"
    )
    .then((response) => {
      let data = response.data;
      res.send(data);
    });
});

app.post("/sendLocation", (req, res) => {
  let location = req.body.location;
  res.send(location);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
