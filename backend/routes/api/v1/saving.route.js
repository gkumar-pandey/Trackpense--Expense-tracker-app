const express = require("express");
const {
  createSavingHandler,
  readSavingHandler,
} = require("../../../controllers/saving.controller");
const savingRoutes = express.Router();

// POST /api/v1/savings - create new saving
savingRoutes.post("/", createSavingHandler);

// GET /api/v1/savings - fetch all saving data.
savingRoutes.get("/", readSavingHandler);

module.exports = savingRoutes;
