/*jshint esversion: 6*/
const pgp = require('pg-promise')();
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'articles_products'
};
const db = pgp(cn);
module.exports = db;