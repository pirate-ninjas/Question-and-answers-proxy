const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));
app.use(express.json());

const ports = {
  'item': 1000,
  'ultbought': 2000,
  'alsoliked': 2000,
  'reviews': 3000,
  'qna': 4000
}
app.get('/api/products/:id/:service', (req, res) => {
  const itemNum = parseInt(req.params.id, 10);
  const { service } = req.params;
  axios.get(`http://localhost:${ports[service]}/api/products/${itemNum}/${service}`)
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

app.post('/api/products/:id/qna', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.post(`http://localhost:4000/api/products/${id}/qna`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.post('/api/products/:id/qna/answer', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.post(`http://localhost:4000/api/products/${id}/qna/answer`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.post('/api/products/reviews', (req, res) => {
  axios.post(`http://localhost:3000/api/products/reviews`, req.body)
    .then(response => res.send(response))
    .catch(err => res.send(err));
});

app.patch('/api/products/:id/qna/answer/yes', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.patch(`http://localhost:4000/api/products/${id}/qna/answer/yes`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.patch('/api/products/:id/qna/answer/no', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.patch(`http://localhost:4000/api/products/${id}/qna/answer/no`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.patch('/api/products/:itemid/reviews/yes', (req, res) => {
  const reviewId = parseInt(req.params.itemid, 10);
  axios.patch(`http://localhost:3000/api/products/${reviewId}/reviews/yes`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.patch('/api/products/:itemid/reviews/no', (req, res) => {
  const reviewId = parseInt(req.params.itemid, 10);
  axios.patch(`http://localhost:3000/api/products/${reviewId}/reviews/no`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

module.exports = app;