const loginValidation = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const check1 = data && data.userName && data.password;
  const check2 = check1 && data.userName.length > 5 && data.password.length > 5;
  if (check2) {
    next();
  } else {
    res.json({ status: false, message: "invalid field " });
  }
};

module.exports = {
  loginValidation,
};
