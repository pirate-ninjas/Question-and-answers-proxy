const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/api/products/1/qna', (req, res) => {
  axios.get('http://localhost:4000/api/products/1/qna')
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = app;