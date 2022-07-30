const express = require("express");
const router = express.Router();
const tableControl = require("../controllers/table_control.js");

router.get("/allActiveTables", tableControl.allActiveTables);
/* router.get("/filledSpacesTables", tableControl.filledSpacesTables); */
router.get("/allSuborders/:id_board/:id_order", tableControl.allSuborders);
router.get("/orderTable", tableControl.orderTable);
router.post("/addSuborder", tableControl.addSuborder);
router.post("/deleteSuborder", tableControl.deleteSuborder);

module.exports = router;
