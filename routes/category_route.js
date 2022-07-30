const express = require("express");
const router = express.Router();
const categoryControl = require("../controllers/category_control.js");

router.get("/allCategories", categoryControl.allCategories);
router.post("/addCategory", categoryControl.addCategory);
router.post("/deleteCategory", categoryControl.deleteCategory);

module.exports = router;
