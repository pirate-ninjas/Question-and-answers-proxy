const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));
app.use(express.json());

// const ports = {
//   'item': 1000,
//   'ultbought': 2000,
//   'alsoliked': 2000,
//   'reviews': 3000,
//   'qna': 4000
// }
// For QNA service GET

app.get('/api/products/:id/qna', (req, res) => {
  const itemNum = parseInt(req.params.id, 10);
  const { service } = req.params;
  axios.get(`http://13.59.96.126/api/products/${itemNum}/qna`)
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

// For QNA servive POST

app.post('/api/products/:id/qna', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.post(`http://13.59.96.126/api/products/${id}/qna`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.post('/api/products/:id/qna/answer', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.post(`http://13.59.96.126/api/products/${id}/qna/answer`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

// For QNA service PATCH

app.patch('/api/products/:id/qna/answer/yes', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.patch(`http://13.59.96.126/api/products/${id}/qna/answer/yes`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.patch('/api/products/:id/qna/answer/no', (req, res) => {
  const id = parseInt(req.params.id, 10);
  axios.patch(`http://13.59.96.126/api/products/${id}/qna/answer/no`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

// ALSOBOUGHT SERVICE

app.get('/api/products/:id/ultbought', (req, res) => {
  const itemid = parseInt(req.params.id, 10);
  axios.get(`http://3.23.104.186/api/products/50/ultbought`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
      res.send(500)
    });
  });

app.get('/api/products/:id/alsoliked', (req, res) => {
  const itemid = parseInt(req.params.id, 10);
  axios.get(`http://3.23.104.186/api/products/50/alsoliked`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    })
});

// ITEMS SERVICE

app.get('/api/products/:id/item', (req, res) => {
  const itemid = parseInt(req.params.id, 10);
  axios.get(`http://34.210.9.47/api/products/${itemid}/item`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
      res.send(500)
    });
  });


// REVIEWS SERVICE

app.get('/api/products/:id/reviews', (req, res) => {
  const itemid = parseInt(req.params.id, 10);
  axios.get(`http://18.220.158.113/api/products/${itemid}/reviews`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
      res.send(500)
    });
  });


app.post('/api/products/reviews', (req, res) => {
  axios.post(`http://18.220.158.113/api/products/reviews`, req.body)
    .then(response => res.send(response))
    .catch(err => res.send(err));
});


app.patch('/api/products/:itemid/reviews/yes', (req, res) => {
  const reviewId = parseInt(req.params.itemid, 10);
  axios.patch(`http://18.220.158.113/api/products/${reviewId}/reviews/yes`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

app.patch('/api/products/:itemid/reviews/no', (req, res) => {
  const reviewId = parseInt(req.params.itemid, 10);
  axios.patch(`http://18.220.158.113/api/products/${reviewId}/reviews/no`, req.body)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

module.exports = app;