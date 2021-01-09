var express = require("express");
var router = express.Router();
const axios = require("axios");
require("dotenv").config();

/* GET postLocation listing. */
router.post("/", function (req, res, next) {
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

module.exports = router;
