const categoryModel = require("../models/category_model.js");
let categoryControl = () => {};

categoryControl.allCategories = (request, result) =>
  categoryModel.allCategories([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

categoryControl.addCategory = (request, result) => {
  const body = request.body;

  if (body.c_name)
    categoryModel.addCategory([body.c_name], (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : rows.affectedRows > 0
        ? result.status(202).send({ message: "Categoría registrada" })
        : result.status(500).send({ message: "No se registró la categoría" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

categoryControl.deleteCategory = (request, result) => {
  const body = request.body;

  if (body.id_category)
    categoryModel.deleteCategory([body.id_category], (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : rows.affectedRows > 0
        ? result.status(202).send({ message: "Categoría eliminada" })
        : result.status(500).send({ message: "No se eliminó la categoría" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

module.exports = categoryControl;
