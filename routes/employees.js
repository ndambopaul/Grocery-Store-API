const express = require("express");

const { getEmployees, newEmployee } = require("../controllers/employees");

const router = express.Router();

router.get("/", getEmployees);
router.post("/", newEmployee);

module.exports = router