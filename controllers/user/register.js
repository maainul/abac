const User = require("../../models/user.js");
const err = require("../../utility/err.js");
const { createSuccess } = require("../../utility/message.js");

const register = async (req, res) => {
  try {
    const result = await User.create(req.body);
    console.log("User create called.");
    res.status(201).json(createSuccess("User", result));
  } catch (error) {
    console.error("Error while add user data. ", error);
    res.json(err);
  }
};
module.exports = register;
