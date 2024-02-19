const express = require('express');
const { readAllExpensesHandler, createExpenseHandler } = require('../../../controllers/expense.controller');
const expenseRoutes = express.Router()

// GET /api/v1/expenses - fetch all expenses from database.
expenseRoutes.get("/",readAllExpensesHandler);

// POST /api/v1/expenses - create a expense.
expenseRoutes.post("/expenses",createExpenseHandler)

module.exports = expenseRoutes;

