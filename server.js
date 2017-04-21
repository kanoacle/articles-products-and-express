/*jshint esversion: 6*/
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
// const articles = require('./routes/articles.js');
const products = require('./routes/products.js');
const PORT = 3000;

const app = express();

//attaching middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', products);

const hbs = handlebars.create({
  extname: 'hbs',
  defaultLayout: 'main'
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.listen = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;