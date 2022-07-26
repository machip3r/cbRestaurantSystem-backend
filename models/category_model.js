const connection = require("./connection");

let categoryModel = () => {};

categoryModel.addCategory = (data, callback) => {
  connection.query(
    "INSERT INTO category(c_name, c_type) VALUES (?, ?)",
    data,
    callback
  );
};

categoryModel.allCategories = (data, callback) => {
  connection.query("SELECT * FROM category;", [], callback);
};

categoryModel.deleteCategory = (data, callback) => {
  connection.query(
    "DELETE FROM category WHERE id_category = ?",
    data,
    callback
  );
};

module.exports = categoryModel;
