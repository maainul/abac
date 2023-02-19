
const  User = require("../../models/user.js");
const  err  = require("../../utility/err.js");

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log("User data fetched successfully..")
    res.status(200).json(users)
  } catch (error) {
    console.error("User data fetched error")
    res.status(400).send(error)
  }
};
module.exports = getAll;