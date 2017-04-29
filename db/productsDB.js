/*jshint esversion: 6*/
const products = {};
const db = require('./connection.js');

products.get = () => {
  return db.any('SELECT * FROM products')
  .catch((err) => {
    console.log(err);
  });
};

products.post = (newProduct) => {
  const options = [newProduct.name, newProduct.price, newProduct.inventory];
  return db.none('INSERT INTO products(name, price, inventory) VALUES($1, $2, $3)', options)
  .catch((err) => {
    console.log(err);
  });
};

products.getById = (id) => {
  const num = [id];
  return db.any('SELECT * FROM products WHERE id = $1', num)
  .catch((err) => {
    console.log(err);
  });
};

products.putById = (product, id) => {
  const options = [product.name, product.price, product.inventory, id];
  return db.none('UPDATE products SET name = $1, price = $2, inventory = $3 WHERE id = $4', options)
  .catch((err) => {
    console.log(err);
  });
};

products.deleteById = (id) => {
  const num = [id];
  return db.any('DELETE FROM products WHERE id = $1', num)
  .catch((err) => {
    console.log(err);
  });
};

products.edit = (id) => {
  const num = [id];
  return db.any('SELECT * FROM products WHERE id = $1', num)
  .catch((err) => {
    console.log(err);
  });
};

module.exports = products;