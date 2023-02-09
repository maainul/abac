import User from "../../models/user.model.js";

const register = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "User Created Successfully.",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export default register;