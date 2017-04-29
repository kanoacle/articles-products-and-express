/*jshint esversion: 6*/
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const articles = require('../db/articlesDB.js');

router.route('/')
.get((req, res) => {
  articles.get()
  .then((data) => {
    res.render('articles', {articles: data});
  });
})
.post((req, res) => {
  articles.post(req.body)
  .then(() => {
    res.redirect('/articles');
  });
});

router.route('/new')
.get((req, res) => {
  res.render('newA');
});

router.route('/:title/')
.get((req, res) => {
  articles.getById(req.params.title)
  .then((data) => {
    res.render('articles', {articles: data});
  })
  .catch((err) => {
    res.send('No article available here! Try another number.');
  });
})
.put((req, res) => {
  articles.putById(req.body, req.params.title)
  .then(() => {
    res.redirect('/articles');
  })
  .catch((err) => {
    res.send('No article available here! Try another number.');
  });
})
.delete((req, res) => {
  articles.deleteById(req.params.title)
  .then(() => {
    res.redirect('/articles');
  })
  .catch((err) => {
    res.send('No article available here! Try another number.');
  });
});

router.route('/:title/edit')
.get((req, res) => {
  articles.edit(req.params.title)
  .then((data) => {
    res.render('editA', {articles: data});
  })
  .catch((err) => {
    res.send('No article available here! Try another number.');
  });
});

module.exports = router;