/*jshint esversion: 6*/
const products = {};
const db = require('./connection.js');

products.get = () => {
  return db.any('SELECT * FROM products')
  .catch((err) => {
    console.log(err);
  });
};

products.post = (req, res) => {
  if (req.body.name !== undefined && req.body.price !== undefined && req.body.inventory !== undefined) {
      list.products.push(req.body);
      res.render('products', list);
    } else {
      res.json({success: false});
    }
};

products.getById = (req, res) => {
  let oneList = {};
  if (list.products[req.params.id - 1] !== undefined) {
    oneList.products = [list.products[req.params.id - 1]];
    res.render('products', oneList);
  } else {
    res.send(`No product #${req.params.id} available.`);
  }
};
products.putById = (req, res) => {
  if (list.products[req.params.id - 1] !== undefined) {
    list.products.splice(req.params.id - 1, 1, req.body);
    for (var i = 0; i < list.products.length; i++) {
      list.products[i].id = i + 1;
    }
    res.render('products', list);
  } else {
    res.send(`No product #${req.params.id} available.`);
  }
};
products.deleteById = (req, res) => {
  if (list.products[req.params.id - 1] !== undefined) {
    list.products.splice(req.params.id - 1, 1);
    for (var i = 0; i < list.products.length; i++) {
      list.products[i].id = i + 1;
    }
    res.render('products', list);
  } else {
    res.send(`No product #${req.params.id} available.`);
  }
  id--;
};

products.edit = (req, res) => {
  let oneList = {};
  if (list.products[req.params.id - 1] !== undefined) {
    oneList.products = [list.products[req.params.id - 1]];
    res.render('editP', oneList);
  } else {
    res.send(`No product #${req.params.id} available.`);
  }
};

products.new = (req, res) => {
  res.render('newP');
};

module.exports = products;