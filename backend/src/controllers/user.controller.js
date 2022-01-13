const signupController = (req, res) => {
  console.log("i am from controller");
  res.send("hwllo", 200);
};
module.exports = {
  signupController,
};
