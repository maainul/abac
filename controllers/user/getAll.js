import logger from "../../logger/logger.js";
import User from "../../models/user.model.js";

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    logger.info("User data fetched successfully..")
    res.json(users);
  } catch (error) {
    logger.error("User data fetched error")
    res.json({ message: error.message });
  }
};
export default getAll;