const express = require("express");
const app = express();
const PORT = 5000;
const { dbConnect } = require("./connection/dbconfig");
const MainRoute = require("./routes/index");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dbConnect();
app.use("/api", MainRoute);

app.listen(PORT, function (err) {
  console.log("listening to port", PORT);
});
