const express = require("express");
const router = express.Router();
const { signupController } = require("../controllers/user.controller");
router.get("/user", signupController);

module.exports = router;
