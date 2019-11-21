const path = require('path');
const express = require('express');

const PORT = 3131;

let app = express();

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.listen(PORT, () => {'Express Server Started on PORT: ', PORT});
