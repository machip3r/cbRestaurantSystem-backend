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

  if (
    body.id_order &&
    body.p_subtotal &&
    body.p_total &&
    body.p_tip &&
    body.p_type
  )
    paymentModel.addPayment(
      [body.id_order, body.p_subtotal, body.p_total, body.p_tip, body.p_type],
      (error, rows) =>
        error
          ? result.status(500).send({ message: error })
          : result.status(200).send(rows)
    );
  else result.status(401).send({ message: "Peticion incorrecta" });
};

module.exports = paymentControl;
