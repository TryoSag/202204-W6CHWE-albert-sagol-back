require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug");
const mongoose = require("mongoose");

const connectDB = async () =>
  new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_STRING, (error) => {
      if (error) {
        debug(chalk.red("Error in DB: ", error.message));
        reject();
        return;
      }
      debug(chalk.green("Connected DB"));
      resolve();
    });
  });

module.exports = connectDB;
