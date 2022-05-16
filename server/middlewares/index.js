require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const debug = require("debug");

const app = express();

app.use((req, res, next) => {
  debug("New request");
  next();
});

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ msg: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "Server error" });
};

module.exports = {
  notFoundError,
  generalError,
};
