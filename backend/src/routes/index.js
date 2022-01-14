const express = require("express");
const router = express.Router();
const { loginValidation } = require("../middleware/validator");
const {
  signupController,
  loginAdmin,
  updateUser,
} = require("../controllers/user.controller");
router.get("/user", signupController);
router.post("/login", loginValidation, loginAdmin);
router.put("/admin/:adminid", updateUser);

module.exports = router;
