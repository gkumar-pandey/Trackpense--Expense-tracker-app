const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    pay_to: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
