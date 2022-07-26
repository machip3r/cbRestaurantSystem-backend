const paymentModel = require("../models/payment_model.js");
const paymentControl = () => {};

paymentControl.showAllPayments = (request, result) =>
  paymentModel.showAllPayments([], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

paymentControl.showOrdersPerTable = (request, result) =>
  paymentModel.showOrdersPerTable([request.params.id_order], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

paymentControl.orderTotal = (request, result) =>
  paymentModel.orderTotal([request.params.id_order], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  );

/* paymentControl.orderTotalIVA = (request, result) =>
  paymentModel.orderTotalIVA([request.params.id_order], (error, rows) =>
    error
      ? result.status(500).send({ message: error })
      : result.status(200).send(rows)
  ); */

paymentControl.addPayment = (request, result) => {
  const body = request.body;

  paymentModel.addPayment(
    [
      body.pag_ord_id,
      body.pag_ord_id,
      body.pag_ord_id,
      body.pag_propina,
      body.pag_tipo_pago,
    ],
    (error, rows) =>
      error
        ? result.status(500).send({ message: error })
        : result.status(200).send(rows)
  );
};

module.exports = paymentControl;
