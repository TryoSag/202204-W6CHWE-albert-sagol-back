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
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.statusCode ? error.message : "Server error";

  debug(chalk.red(error.message));
  res.status(statusCode).json({ msg: errorMessage });
};

module.exports = {
  notFoundError,
  generalError,
};
