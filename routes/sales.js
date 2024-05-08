const express = require("express");

const { getSales, getSaleById, createSale, updateSale, deleteSale } = require("../controllers/sales");

const router = express.Router();

router.get("/", getSales);
router.post("/", createSale);
router.get("/:id", getSaleById);
router.put("/:id", updateSale);
router.delete("/:id", deleteSale);

module.exports = router;