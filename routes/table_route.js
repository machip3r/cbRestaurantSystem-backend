const express = require("express");
const router = express.Router();
const tableControl = require("../controllers/table_control.js");

router.post("/addTable", tableControl.addTable);
router.post("/updateTable", tableControl.updateTable);
router.post("/deleteTable", tableControl.deleteTable);
router.get("/allTables", tableControl.allTables);
router.get("/allActiveTables", tableControl.allActiveTables);
/* router.get("/filledSpacesTables", tableControl.filledSpacesTables); */
router.get("/allSuborders/:id_board/:id_order", tableControl.allSuborders);
router.get("/orderTable", tableControl.orderTable);
router.get("/getTableOrder/:id_board", tableControl.getTableOrder);
router.get("/getTableTag/:id_board", tableControl.getTableTag);
router.post("/addSuborder", tableControl.addSuborder);
router.post("/deleteSuborder", tableControl.deleteSuborder);

module.exports = router;
