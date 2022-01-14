const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  userName: { type: String, require: true, unique: true },
  password: { type: String, require: true, unique: true, select: false },
  created: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: false },
});
const user = model("user", userSchema);
module.exports = user;
