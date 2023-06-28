const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createExpense = (expense) => {
  console.log(expense, "print expense");
  return prisma.expense
    .create({
      data: {
        name: "expense-name",
        category: "expense-category",
        amount: 10,
      },
    })
    .catch((e) => {
      console.log(e, "print console");
      throw new Error("Ha ocurrido un error al intentar crear un gasto");
    });
};

module.exports = {
  createExpense,
};
