const  express = require("express")

const  getAll = require("../controllers/user/getAll.js")
const register = require("../controllers/user/register.js");

const router = express.Router();

router.get('/',getAll);
router.post('/reg',register);

module.exports = router;

