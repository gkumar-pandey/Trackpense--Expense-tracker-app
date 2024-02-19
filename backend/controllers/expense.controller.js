const Expense = require("../models/expense.model");

/**
 * @route GET /api/v1/expenses
 * @description fetch all expenses data.
 * @param {Object} req Express request object.
 * @param {Object} res Express response sends either error or success message with all expense.
 */
const readAllExpensesHandler = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    if (!expenses) {
      return res
        .status(404)
        .json({ success: false, message: "expenses not found." });
    }
    return res.status(200).json({ success: true, expenses });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
    throw new Error(error);
  }
};

/**
 * @route GET /api/v1/expenses
 * @description create a new expense.
 * @param {Object} req Express request contains expense data in body. 
 * @param {Object} res Express response sends either error message or created expense. 
 * 
 */
const createExpenseHandler = async (req, res) => {
  try {
    const expenseData = req.body;
    const newExpense = new Expense(expenseData);
    await newExpense.save();
    if (!newExpense) {
      return res
        .status(404)
        .json({ success: false, message: "Expense not created." });
    }
    return res
      .status(201)
      .json({
        success: true,
        message: "Expense created.",
        expense: newExpense,
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error.",
        erorr: error,
      });
    throw new Error(error);
  }
};



module.exports = {
  readAllExpensesHandler,
  createExpenseHandler
};
