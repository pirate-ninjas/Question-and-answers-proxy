const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/api/products/:id/qna', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.get(`http://localhost:4000/api/products/${id}/qna`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});
app.get('/api/products/:itemid/alsoliked', (req, res) => {
  const id = parseInt(req.params.itemid);
  axios.get(`http://localhost:2000/api/products/${id}/alsoliked`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});
app.get('/api/products/:itemid/ultbought', (req, res) => {
  const id = parseInt(req.params.itemid);
  axios.get(`http://localhost:2000/api/products/${id}/ultbought`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = app;