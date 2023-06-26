const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

app.get("/", (req, res) => {
  console.log(config, "print consolero");
  res.send("Siiiiii!");
});

app.listen(config.port, () => {
  console.log("listening in port: ", config.port);
});
