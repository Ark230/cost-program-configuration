const store = require("./store.js");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createExpense = async (req, res) => {
  const { name, category, amount } = req.body;
  const newExpense = await prisma.expense.create({
    data: { name, category, amount },
  });

  console.log(newExpense, "print ta ok?");
  res.json(newExpense);
};

const getExpenses = async (req, res) => {
  const allExpenses = await prisma.expense.findMany();
  console.log(allExpenses, "print ta ok????");
  res.json(allExpenses);
};

module.exports = {
  createExpense,
  getExpenses,
};
