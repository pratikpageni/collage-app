const { model } = require("mongoose");

const User = require("../models/user.model");
const signupController = async (req, res) => {
  try {
    const user = {
      userName: "jit@gmail.com",
      password: "password",
      name: "Aryan school of engineering & Management",
      created: Date.now(),
      isActive: true,
    };

    const ext_user = await User.find();
    console.log(ext_user);
    if (ext_user && ext_user.length > 0) {
      res.send({ status: false, message: "user already exist" });
    } else {
      const response = await User(user).save();
      if (response) {
        res.json({
          status: true,
          data: response,
          message: "super user created",
        });
      } else {
        res.json({
          status: true,
          data: response,
          message: "Error on super user created",
        });
      }
    }
  } catch (e) {
    res.send({ status: false, message: e.toString });
  }
};

const loginAdmin = async (req, res) => {
  const { userName, password } = req.body;
  const response = await User.findOne({ userName, password });
  if (response) {
    const resp = response;
    delete resp.password;
    console.log(resp);
    res.json({ status: true, message: "login successful", data: resp });
  } else {
    res.json({
      status: false,
      message: "userNot found  in database",
    });
  }
};
module.exports = {
  signupController,
  loginAdmin,
};
