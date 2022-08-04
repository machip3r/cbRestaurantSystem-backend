var express = require("express");
var router = express.Router();
var employeeControl = require("../controllers/employee_control");
/* var path = require("path");
var multer = require("multer"); */

/* var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadS = multer({ storage: storage }).single("file"); */

router.post("/addEmployee", employeeControl.addEmployee);
router.get("/allEmployees", employeeControl.allEmployees);
router.put("/setStatusEmployee", employeeControl.setStatusEmployee);
router.put("/updateEmployee", employeeControl.updateEmployee);
router.post("/deleteEmployee", employeeControl.deleteEmployee);
router.get("/activeEmployees", employeeControl.activeEmployees);
router.get("/inactiveEmployees", employeeControl.inactiveEmployees);

module.exports = router;
