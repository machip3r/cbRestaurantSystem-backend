const productModel = require("../models/product_model.js");
let productControl = () => {};

productControl.allProducts = (request, result) =>
  productModel.allProducts([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

productControl.addProduct = (request, result) => {
  const body = request.body;

  if (
    body.id_category &&
    body.p_name &&
    body.p_price &&
    body.p_description &&
    body.p_stock
  )
    productModel.addProduct(
      [
        body.id_category,
        body.p_name,
        body.p_price,
        body.p_description,
        body.p_stock,
      ],
      (error, rows) =>
        error
          ? result.status(500).send({ message: error })
          : rows.affectedRows > 0
          ? result.status(202).send({ message: "Producto registrado" })
          : result.status(500).send({ message: "No se registró el producto" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

productControl.deleteProduct = (request, result) => {
  const body = request.body;

  if (body.id_product)
    productModel.deleteProduct([body.id_product], (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : rows.affectedRows > 0
        ? result.status(202).send({ message: "Producto eliminado" })
        : result.status(500).send({ message: "No se eliminó el producto" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

productControl.updateProduct = (request, result) => {
  const body = request.body;

  if (
    body.id_product &&
    body.id_category &&
    body.p_name &&
    body.p_price &&
    body.p_description &&
    body.p_stock
  )
    productModel.updateProduct(
      [
        body.id_category,
        body.p_name,
        body.p_price,
        body.p_description,
        body.p_stock,
        body.id_product,
      ],
      (error, rows) =>
        error
          ? result.status(500).send({ message: error })
          : rows.affectedRows > 0
          ? result.status(202).send({ message: "Producto actualizado" })
          : result.status(500).send({ message: "No se actualizó el producto" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

productControl.setActiveProduct = (request, result) => {
  const body = request.body;

  if (body.id_product)
    productModel.setActiveProduct([body.id_product], (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : rows.affectedRows > 0
        ? result.status(202).send({ message: "Producto habilitado" })
        : result.status(500).send({ message: "No se habilitó el producto" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

productControl.setInactiveProduct = (request, result) => {
  const body = request.body;

  if (body.id_product)
    productModel.setInactiveProduct([body.id_product], (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : rows.affectedRows > 0
        ? result.status(202).send({ message: "Producto deshabilitado" })
        : result.status(500).send({ message: "No se deshabilitó el producto" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

module.exports = productControl;
