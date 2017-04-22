/*jshint esversion: 6*/
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const articles = require('../db/articles.js');

router.route('/')
.get(articles.get)
.post(articles.post);

router.route('/new')
.get(articles.new);

router.route('/:title/')
.get(articles.getById)
.put(articles.putById)
.delete(articles.deleteById);

router.route('/:title/edit')
.get(articles.edit);

module.exports = router;