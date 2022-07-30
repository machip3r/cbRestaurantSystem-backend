const express = require("express");
const router = express.Router();
const paymentControl = require("../controllers/payment_control.js");

router.get("/showAllPayments", paymentControl.showAllPayments);
router.get("/showOrdersPerTable/:id_order", paymentControl.showOrdersPerTable);
router.get("/orderPerTable", paymentControl.showOrdersPerTable);
router.get("/orderTotal/:id_order", paymentControl.orderTotal);
/* router.get("/orderTotalIVA/:id_order", paymentControl.orderTotalIVA); */
router.post("/addPayment", paymentControl.addPayment);

module.exports = router;
