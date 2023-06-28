const express = require("express");
const controller = require("./controller.js");

const router = express.Router();

router.get("/", controller.getExpenses);
router.post("/", controller.createExpense);

module.exports = router;
