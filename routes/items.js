const express = require("express");
const { getItems, getItemById, createItem, updateItem, deleteItem, createManyItems } = require("../controllers/item");

const router = express.Router();

router.get("/", getItems);
router.post("/", createItem);
router.post("/create-many", createManyItems);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router