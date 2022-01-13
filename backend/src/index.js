const express = require("express");
const app = express();
const PORT = 5000;
const { dbConnect } = require("./connection/dbconfig");
const MainRoute = require("./routes/index");
app.use("/api", MainRoute);
dbConnect();

app.listen(PORT, function (err) {
  console.log("listening to port", PORT);
});
