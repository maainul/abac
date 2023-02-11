import logger from "../../logger/logger.js";
import User from "../../models/user.js";
import err from "../../utility/err.js";

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    logger.info("User data fetched successfully..")
    res.json(users);
  } catch (error) {
    logger.error("User data fetched error")
    res.json(err);
  }
};
export default getAll;