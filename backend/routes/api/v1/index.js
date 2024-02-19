const express = require('express');
const incomeRoutes = require('./income.route');
const expenseRoutes = require('./expense.route');
const savingRoutes = require('./saving.route');
const routes = express.Router()

routes.use('/incomes',incomeRoutes)
routes.use('/expenses',expenseRoutes)
routes.use('/savings',savingRoutes)


module.exports = routes;

