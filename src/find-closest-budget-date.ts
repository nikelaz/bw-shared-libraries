import type { Budget } from './types/budget';

export const parseBudget = (budgets: Partial<Budget>[]) => budgets.map(budget => ({
  ...budget,
  month: budget.month ? new Date(budget.month) : new Date(),
}));

export const findClosestBudgetDate = (referenceDate: Date, budgets: Array<Partial<Budget>>): Partial<Budget> | null => {
  if (budgets.length === 0) return null;

  const currentMonth = new Date().getMonth();

  const budgetsCopy = parseBudget(budgets);

  const exactBudget = budgetsCopy.find(budget => budget.month.getMonth() === currentMonth);

  if (exactBudget) return exactBudget;

  budgetsCopy.sort((a: any, b: any) => {
    const distancea = Math.abs(referenceDate.getTime() - a.month);
    const distanceb = Math.abs(referenceDate.getTime() - b.month);
    return distancea - distanceb;
  });

  return budgetsCopy[0];
};
