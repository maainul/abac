const OK = require("../../utility/ok.js");

const User = require("../../models/user.js");
const err = require("../../utility/err.js");
const register = async (req, res) => {
  try {
    const data = await User.create(req.body);
    console.log("User create called.");
    res.status(201).json({ success: true, data: data });
  } catch (error) {
    console.error("Error while add user data.");
    res.json(err);
  }
};
module.exports = register;
