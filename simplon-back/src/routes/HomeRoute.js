const express = require("express");
const HomeRouter = express.Router();

HomeRouter.get("/", (req, res) => {
  res.json("Je suis la HomePage");
});

module.exports = HomeRouter;
