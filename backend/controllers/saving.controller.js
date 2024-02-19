const Saving = require("../models/saving.model");

/**
 * @route GET /api/v1/savings
 * @description fetch all saving data.
 * @param {Object} req Express Request.
 * @param {Object} res Express Reponse sends either error message or success with saving data.
 *
 */
const readSavingHandler = async (req, res) => {
  try {
    const savingsData = await Saving.find({});
    if (!savingsData) {
      return res
        .status(404)
        .json({ success: false, message: "saving data not found." });
    }
    return res.status(200).json({ success: true, savings: savingsData });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw new Error(error);
  }
};

/**
 * @route POST /api/v1/savings
 * @description new saving created.
 * @param {Object} req Express Request contains saving data in body.
 * @param {Object} res Express Response sends either error message or success with created saving.
 */
const createSavingHandler = async (req, res) => {
  try {
    const savingData = req.body;
    const newSaving = new Saving(savingData);
    await newSaving.save();
    if (!newSaving) {
      return res
        .status(404)
        .json({ success: false, message: "saving not created." });
    }

    return res
      .status(201)
      .json({ success: true, message: "saving created.", saving: newSaving });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw new Error(error);
  }
};

module.exports={
    readSavingHandler,
    createSavingHandler
}