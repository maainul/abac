import logger from "../../logger/logger.js";
import User from "../../models/user.model.js";

const register = async (req, res) => {
  try {
    await User.create(req.body);
    logger.info("User create called.")
    res.json({
      message: "User Created Successfully.",
    });
  } catch (error) {
    logger.error("Error while add user data.")
    res.json({ message: error.message });
  }
};
export default register;
