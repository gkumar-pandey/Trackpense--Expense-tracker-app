const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
