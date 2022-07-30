const express = require("express");
const router = express.Router();
const productControl = require("../controllers/product_control.js");

router.get("/allProducts", productControl.allProducts);
router.post("/addProduct", productControl.addProduct);
router.post("/deleteProduct", productControl.deleteProduct);
router.post("/updateProduct", productControl.updateProduct);
router.post("/setActiveProduct", productControl.setActiveProduct);
router.post("/setInactiveProduct", productControl.setInactiveProduct);

module.exports = router;
