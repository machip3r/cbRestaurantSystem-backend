const connection = require("./connection");

let productModel = () => {};

productModel.addProduct = (data, callback) => {
  connection.query(
    "INSERT INTO product(id_category, p_name, p_price, p_description, p_stock) VALUES (?, ?, ?, ?, ?)",
    data,
    callback
  );
};

productModel.allProducts = (data, callback) => {
  connection.query(
    "SELECT p.*, c.c_name FROM product p INNER JOIN category c ON p.id_category = c.id_category ORDER BY p.p_name",
    [],
    callback
  );
};

productModel.deleteProduct = (data, callback) => {
  connection.query("DELETE FROM product WHERE id_product = ?", data, callback);
};

productModel.updateProduct = (data, callback) => {
  connection.query(
    "UPDATE product SET id_category = ?, p_name = ?, p_price = ?, p_description = ?, p_stock = ? WHERE id_product = ?",
    data,
    callback
  );
};

productModel.setActiveProduct = (data, callback) => {
  connection.query(
    "UPDATE product SET p_status = 'a' WHERE id_product = ?",
    data,
    callback
  );
};

productModel.setInactiveProduct = (data, callback) => {
  connection.query(
    "UPDATE product SET p_status = 'i' WHERE id_product = ?",
    data,
    callback
  );
};

module.exports = productModel;
