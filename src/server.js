const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const routes = require("./network/routes");

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(config.port, () => {
  console.log("listening in port: ", config.port);
});
