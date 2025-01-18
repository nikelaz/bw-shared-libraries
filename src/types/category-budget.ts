import type { Category } from './category';
import type { Budget } from './/budget';
import type { Transaction } from './transaction';

export type CategoryBudget = {
  id: number,
  amount: number,
  currentAmount: number,
  category?: Category,
  budget?: Budget,
  transactions?: Array<Transaction>,
};
