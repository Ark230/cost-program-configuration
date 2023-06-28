const expense = require("../components/expenses/network");

const router = (server) => {
  server.use("/expense", expense);
};

module.exports = router;
