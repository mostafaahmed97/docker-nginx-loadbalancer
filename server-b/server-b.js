const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.get("/", function (req, res, next) {
  return res.send("Response from server B");
});

app.listen(3001, function () {
  console.log("Server B started");
});
