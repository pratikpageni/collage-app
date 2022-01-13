const { model, Schema } = require("mongoose");

const userSchema = new Schema({});
const user = model("user", userSchema);
module.exports = user;
