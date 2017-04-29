/*jshint esversion: 6*/
const articles = {};
let list = {articles: []};
let id = 1;
const db = require('./connection.js');

articles.get = (req, res) => {
  res.render('articles', list);
};
articles.post = (req, res) => {
  if (req.body.title !== undefined && req.body.author !== undefined && req.body.content !== undefined) {
      list.articles.push(req.body);
      res.render('articles', list);
    } else {
      res.json({success: false});
      console.log(req.body);
    }
    id++;
};

articles.getById = (req, res) => {
  let oneList = {};
  if (list.articles[req.params.id - 1] !== undefined) {
    oneList.articles = [list.articles[req.params.id - 1]];
    res.render('articles', oneList);
  } else {
    res.send(`No article #${req.params.id} available.`);
  }
};
articles.putById = (req, res) => {
  if (list.articles[req.params.id - 1] !== undefined) {
    list.articles.splice(req.params.id - 1, 1, req.body);
    for (var i = 0; i < list.articles.length; i++) {
      list.articles[i].id = i + 1;
    }
    res.render('articles', list);
  } else {
    res.send(`No article #${req.params.id} available.`);
  }
};
articles.deleteById = (req, res) => {
  if (list.articles[req.params.id - 1] !== undefined) {
    list.articles.splice(req.params.id - 1, 1);
    for (var i = 0; i < list.articles.length; i++) {
      list.articles[i].id = i + 1;
    }
    res.render('articles', list);
  } else {
    res.send(`No article #${req.params.id} available.`);
  }
  id--;
};

articles.edit = (req, res) => {
  let oneList = {};
  if (list.articles[req.params.id - 1] !== undefined) {
    oneList.articles = [list.articles[req.params.id - 1]];
    res.render('editA', oneList);
  } else {
    res.send(`No article #${req.params.id} available.`);
  }
};

articles.new = (req, res) => {
  res.render('newA');
};

module.exports = articles;