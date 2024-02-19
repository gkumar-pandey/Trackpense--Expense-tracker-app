const express = require("express");
const {
  readIncomesHandler,
  createIncomeHandler,
  updateIncomeHandler,
  deleteIncomeHandler,
} = require("../../../controllers/income.controller");
const incomeRoutes = express.Router();

// GET /api/v1/incomes - fetch all income data from database.
incomeRoutes.get("/", readIncomesHandler);

// POST /api/v1/incomes - Create new income data in database.
incomeRoutes.post("/", createIncomeHandler);

// POST /api/v1/incomes/:incomeId - Update income data
incomeRoutes.post("/:incomeId", updateIncomeHandler);

// DELETE /api/v1/incomes/:incomeId - delete a income
incomeRoutes.delete("/:incomeId", deleteIncomeHandler);

module.exports = incomeRoutes;
