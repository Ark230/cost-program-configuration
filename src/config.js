require("dotenv").config();

const config = {
  serviceName: "cost-program-configuration",
  version: "1.0.0",
  environment: "local",
  port: process.env.PORT_APP || "3003",
};

module.exports = config;
