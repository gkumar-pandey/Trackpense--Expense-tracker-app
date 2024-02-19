const express = require("express");
const routes = express.Router();

routes.use("/", require("./api"));
routes.get("/", (req, res) => {
  res.json("Hello express");
});

module.exports = routes;
