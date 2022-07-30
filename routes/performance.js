const express = require("express");
const router = express.Router();
const connection = require("../models/connection.js");

router.get("/shutdown", (req, res) => {
  connection.end();
  res.status(200).send("Se cerró la conexión");
});

module.exports = router;
