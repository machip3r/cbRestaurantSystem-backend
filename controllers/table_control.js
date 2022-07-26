const tableModel = require("../models/table_model.js");
const tableControl = () => {};

tableControl.allActiveTables = (request, result) =>
  tableModel.allActiveTables([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

/* tableControl.filledSpacesTables = (request, result) =>
  tableModel.filledSpacesTables([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  ); */

tableControl.allSuborders = (request, result) =>
  tableModel.allSuborders(
    [request.params.id_board, request.params.id_order],
    (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : result.status(200).send(rows)
  );

tableControl.orderTable = (request, result) =>
  tableModel.orderTable([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

tableControl.addSuborder = (request, result) => {
  const body = request.body;

  if (body.id_order && body.id_product && body.s_tag && body.s_cuantity)
    tableModel.addSuborder(
      [body.id_order, body.id_product, body.s_tag, body.s_cuantity],
      (error, rows) =>
        error
          ? result.status(500).send({ message: error })
          : rows.affectedRows > 0
          ? result.status(202).send({ message: "Suborden registrada" })
          : result.status(500).send({ message: "No se registró la suborden" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

tableControl.deleteSuborder = (request, result) => {
  const body = request.body;

  if (body.id_suborder)
    tableModel.deleteSuborder([body.id_suborder], (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : rows.affectedRows > 0
        ? result.status(202).send({ message: "Suborden eliminada" })
        : result.status(500).send({ message: "No se eliminó la suborden" })
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

module.exports = tableControl;
