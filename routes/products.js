/*jshint esversion: 6*/
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const products = require('../db/products.js');

router.route('/')
.get((req, res) => {
  products.get()
  .then((data) => {
    res.render('products', {products: data});
  });
})
.post(products.post);

router.route('/new')
.get(products.new);

router.route('/:id/')
.get(products.getById)
.put(products.putById)
.delete(products.deleteById);

router.route('/:id/edit')
.get(products.edit);

module.exports = router;