const express = require("express");
const router = express.Router();
const { loginValidation } = require("../middleware/validator");
const {
  signupController,
  loginAdmin,
} = require("../controllers/user.controller");
router.get("/user", signupController);
router.post("/login", loginValidation, loginAdmin);

module.exports = router;
