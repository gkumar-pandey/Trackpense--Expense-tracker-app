const Income = require("../models/income.model");

/**
 * @route POST /api/v1/incomes
 * @description create a new income.
 * @param {Object} req Express request object contains income data in body.
 * @param {Object} res Express response object to send either error response or success with income data.
 *
 */
const createIncomeHandler = async (req, res) => {
  try {
    const incomeData = req.body;
    const newIncome = new Income(incomeData);
    await newIncome.save();
    return res
      .status(201)
      .json({ success: true, message: "Income added", income: newIncome });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error,
    });
    throw new Error(error);
  }
};

/**
 * @route GET /api/v1/incomes
 * @description read all income data from database and send as response.
 * @param {Object} req Express Request object
 * @param {Object} res Express Response object to send either error or success with incomes data as response.
 */
const readIncomesHandler = async (req, res) => {
  try {
    const incomes = await Income.find({});
    if (!incomes) {
      return res
        .send(404)
        .json({ message: "Incomes not found.", success: false });
    }

    return res.status(200).json({ success: true, incomes });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
    throw error;
  }
};

/**
 * @route POST /api/v1/incomes/:incomeId
 * @description update a income data.
 * @param {Object} req Express Request object contains income id in params and updated data in body.
 * @param {Object} res Express Response object sends either error or success message with updated income data.
 */
const updateIncomeHandler = async (req, res) => {
  try {
    const { incomeId } = req.params;
    const updatedData = req.body;
    const foundIncome = await Income.findById(incomeId);
    if (!foundIncome) {
      return res
        .status(404)
        .json({ success: false, message: "Income not found" });
    }
    const updatedIncome = await Income.findByIdAndUpdate(
      incomeId,
      updatedData,
      { new: true }
    );
    return res.status(200).json({
      success: "Income updated.",
      success: true,
      income: updatedIncome,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error: error });
    throw error;
  }
};

const deleteIncomeHandler = async (req, res) => {
  try {
    const { incomeId } = req.params;
    const foundIncome = await Income.findById(incomeId);
    if (!foundIncome) {
      return res
        .status(404)
        .json({ success: false, message: "Income not found." });
    }

    await Income.findByIdAndDelete(incomeId);

    return res.status(200).json({ success: true, message: "Income deleted." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw new Error(error);
  }
};

module.exports = {
  createIncomeHandler,
  readIncomesHandler,
  updateIncomeHandler,
  deleteIncomeHandler,
};
