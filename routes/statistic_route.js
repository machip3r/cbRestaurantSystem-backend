const express = require("express");
const router = express.Router();
const statisticControl = require("../controllers/statistic_control.js");

router.get("/todayProfit/:date", statisticControl.todayProfit);
router.get("/monthProfits", statisticControl.monthProfits);
router.get("/allOrdersPerDate/:o_datetime", statisticControl.allOrdersPerDate);
router.get(
  "/allOrdersPerTable/:id_board/:date",
  statisticControl.allOrdersPerTable
);
router.get(
  "/allOrdersPerEmployee/:id_employee/:date",
  statisticControl.allOrdersPerEmployee
);
router.get(
  "/countOrdersPerTable/:id_board/:date",
  statisticControl.countOrdersPerTable
);
router.get(
  "/countOrdersPerEmployee/:id_employee/:date",
  statisticControl.countOrdersPerEmployee
);
router.get("/countSalesPerDate/:date", statisticControl.countSalesPerDate);
router.get("/allTables/", statisticControl.allTables);
router.get("/allEmployees/", statisticControl.allEmployees);

module.exports = router;
