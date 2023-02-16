
const  User = require("../../models/user.js");
const  err  = require("../../utility/err.js");

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log("User data fetched successfully..")
    res.json(users);
  } catch (error) {
    console.error("User data fetched error")
    res.json(err);
  }
};
module.exports = getAll;