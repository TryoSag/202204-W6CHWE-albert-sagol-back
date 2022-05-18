const User = require("../../db/models/User");

const getUser = async () => {
  const data = await User.find();
  return data.users;
};
module.exports = { getUser };
