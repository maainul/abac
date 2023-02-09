import express from "express"

import getAll from "../controllers/user/getAll.js"
import register from "../controllers/user/register.js";

const router = express.Router();

router.get('/',getAll);
router.post('/reg',register);

export default router;

