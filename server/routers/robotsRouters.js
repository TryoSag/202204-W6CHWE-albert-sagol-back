require("dotenv").config();
const express = require("express");
const { getRobots } = require("../controllers/robotsControllers");

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);

module.exports = robotsRouter;
