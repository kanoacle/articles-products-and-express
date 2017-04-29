/*jshint esversion: 6*/
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const products = require('../db/productsDB.js');

router.route('/')
.get((req, res) => {
  products.get()
  .then((data) => {
    res.render('products', {products: data});
  });
})
.post((req, res) => {
  products.post(req.body)
  .then(() => {
    res.redirect('/products');
  });
});

router.route('/new')
.get((req, res) => {
  res.render('newP');
});

router.route('/:id/')
.get((req, res) => {
  products.getById(req.params.id)
  .then((data) => {
    res.render('products', {products: data});
  })
  .catch((err) => {
    res.send('No product available here! Try another number.');
  });
})
.put((req, res) => {
  products.putById(req.body, req.params.id)
  .then(() => {
    res.redirect('/products');
  })
  .catch((err) => {
    res.send('No product available here! Try another number.');
  });
})
.delete((req, res) => {
  products.deleteById(req.params.id)
  .then(() => {
    res.redirect('/products');
  })
  .catch((err) => {
    res.send('No product available here! Try another number.');
  });
});

router.route('/:id/edit')
.get((req, res) => {
  products.edit(req.params.id)
  .then((data) => {
    res.render('editP', {products: data});
  })
  .catch((err) => {
    res.send('No product available here! Try another number.');
  });
});

module.exports = router;