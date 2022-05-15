require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug");
const mongose = require("mongoose");

const connectDB = async () =>
  new Promise((resolve, reject) => {
    mongose.connect(
      "mongodb+srv://Robotos:Robotos@cluster0.rjvwl.mongodb.net/robots?retryWrites=true&w=majority",
      (error) => {
        if (error) {
          debug(chalk.red("Error in DB: ", error.message));
          reject();
          return;
        }
        debug(chalk.green("Connected DB"));
        resolve();
      }
    );
  });

module.exports = connectDB;
