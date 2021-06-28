export default (expenses) => expenses
  .map((expense) => expense.amount)
  .reduce((sum, val) => sum + val, 0);
