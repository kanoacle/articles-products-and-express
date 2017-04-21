/*jshint esversion: 6*/
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const products = require('../db/products.js');

router.route('/')
.get(products.get)
.post(products.post);


router.route('/:id/')
.get(products.getById)
.put(products.putById)
.delete(products.deleteById);

module.exports = router;