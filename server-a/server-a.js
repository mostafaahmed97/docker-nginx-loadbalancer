const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.get("/", function (req, res, next) {
  return res.send("Response from server A");
});

app.listen(3000, function () {
  console.log("Server A started");
});
