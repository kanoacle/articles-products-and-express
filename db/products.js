/*jshint esversion: 6*/
const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
let list = {products: []};
let id = 1;

router.route('/')
.get((req, res) => {
  res.render('products', list);
})
.post((req, res) => {
  console.log(req.body);
  if (req.body.name !== undefined && req.body.price !== undefined && req.body.inventory !== undefined) {
    req.body.id = id;
    list.products.push(req.body);
    res.json({success: true});
  } else {
    res.json({success: false});
  }
  id++;
})
.put((req, res) => {
  res.send('Here we are');
})
.delete((req, res) => {
  res.send('Here we are');
});


router.route('/:id/')
.get((req, res) => {
  let oneList = {};
  console.log(req.params.id - 1);
  if (list.products[req.params.id - 1] !== undefined) {
    oneList.products = [list.products[req.params.id - 1]];
    console.log(oneList);
    res.render('products', oneList);
  } else {
    res.send(`No product #${req.params.id} available.`);
  }
});

module.exports = router;