const path = require('path');
const express = require('express');
const Axios = require('axios');

const PORT = 3131;

let app = express();

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/getPrices', (req, res) => {
  Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((response) => {
      console.log(response.data.bpi);
      res.send(response.data.bpi);
    });
});

app.listen(PORT, () => { console.log('Express Server Started on PORT: ', PORT); });
