const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  speed: {
    type: Number,
  },
  endurance: {
    type: Number,
  },
  dateOfCreation: {
    type: Number,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
