import logger from "../../logger/logger.js";
import User from "../../models/user.js";
import OK from "../../utility/ok.js";
import err from "../../utility/err.js";

const register = async (req, res) => {
  try {
    await User.create(req.body);
    logger.info("User create called.")
    res.json(OK);
  } catch (error) {
    logger.error("Error while add user data.")
    res.json(err);
  }
};
export default register;
