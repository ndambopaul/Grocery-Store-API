const express = require("express");
const { getAttendances, recordAttendance } = require("../controllers/attendance");

const router = express.Router();

router.get("/", getAttendances);
router.post("/", recordAttendance);

module.exports = router