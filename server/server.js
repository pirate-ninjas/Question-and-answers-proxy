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
    .catch(err => res.send(err));
});
app.get('/api/products/:itemid/alsoliked', (req, res) => {
  const id = parseInt(req.params.itemid);
  axios.get(`http://localhost:2000/api/products/${id}/alsoliked`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});
app.get('/api/products/:itemid/ultbought', (req, res) => {
  const id = parseInt(req.params.itemid);
  axios.get(`http://localhost:2000/api/products/${id}/ultbought`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.get('/api/products/:itemid/reviews', (req, res) => {
  const id = parseInt(req.params.itemid, 10);
  axios.get(`http://localhost:3000/api/products/${id}/reviews`)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
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

app.post('/api/products/reviews', (req, res) => {
  axios.post(`http://localhost:3000/api/products/reviews`, req.body)
    .then(response => res.send(response))
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