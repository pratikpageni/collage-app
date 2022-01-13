const mongoose = require("mongoose");

const DB_NAME = "jitdb";
const uri = `mongodb://localhost:27017/${DB_NAME}`;
const options = {};

async function dbConnect() {
  try {
    const connectionns = await mongoose.connect(uri);
    if (connectionns) {
      console.log("db connected");
    } else {
      console.log("something went wrong");
    }
  } catch (e) {
    console.log(e);
  }
}
module.exports = { dbConnect };
