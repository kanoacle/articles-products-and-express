/*jshint esversion: 6*/
const products = {};
let list = {products: []};
let id = 1;

products.get = (req, res) => {
  res.render('products', list);
};
products.post = (req, res) => {
  if (req.body.name !== undefined && req.body.price !== undefined && req.body.inventory !== undefined) {
      req.body.id = id;
      list.products.push(req.body);
      res.json({success: true});
    } else {
      res.json({success: false});
    }
    id++;
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
    res.json({success: true});
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
    res.json({success: true});
  } else {
    res.send(`No product #${req.params.id} available.`);
  }
};

module.exports = products;