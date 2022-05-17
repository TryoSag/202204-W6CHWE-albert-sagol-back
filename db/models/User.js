const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;
