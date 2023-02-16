
const OK = require("../../utility/ok.js");

const  User = require("../../models/user.js");
const  err  = require("../../utility/err.js");
const register = async (req, res) => {
  try {
    await User.create(req.body);
    console.log("User create called.");
    res.json(OK);
  } catch (error) {
    console.error("Error while add user data.");
    res.json(err);
  }
};
module.exports = register;
