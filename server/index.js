require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const debug = require("debug");
const morgan = require("morgan");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.green(`Server listening on port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Server has fail"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`Port ${port} busy`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use("/robots");

module.exports = { initializeServer };
