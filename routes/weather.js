const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const axios = require('axios');

const { WEATHER_API } = process.env;

router.get('/weather', auth, async (req, res) => {
    const { lat, lon } = req.query;

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: lat,
          lon: lon,
          appid: WEATHER_API,
          units: 'metric'
        }
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = router;