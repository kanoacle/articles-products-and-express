/*jshint esversion: 6*/
const articles = {};
const db = require('./connection.js');

articles.get = () => {
  return db.any('SELECT * FROM articles')
  .catch((err) => {
    console.log(err);
  });
};

articles.post = (newArticle) => {
  const options = [newArticle.title, newArticle.author, newArticle.content];
  return db.none('INSERT INTO articles(title, author, content) VALUES($1, $2, $3)', options)
  .catch((err) => {
    console.log(err);
  });
};

articles.getById = (title) => {
  const name = [title];
  return db.any('SELECT * FROM articles WHERE title = $1', name)
  .catch((err) => {
    console.log(err);
  });
};

articles.putById = (article, arTitle) => {
  const options = [article.name, article.price, article.inventory, arTitle];
  return db.none('UPDATE articles SET title = $1, author = $2, content = $3 WHERE title = $4', options)
  .catch((err) => {
    console.log(err);
  });
};

articles.deleteById = (title) => {
  const name = [title];
  return db.any('DELETE FROM articles WHERE title = $1', name)
  .catch((err) => {
    console.log(err);
  });
};

articles.edit = (title) => {
  const name = [title];
  return db.any('SELECT * FROM articles WHERE title = $1', name)
  .catch((err) => {
    console.log(err);
  });
};

module.exports = articles;