import type { CategoryBudget } from './category-budget';
import type { User } from './user';

export type Transaction = {
  id: number,
  title: string,
  amount: number,
  date: Date,
  categoryBudget?: CategoryBudget,
  user?: User,
};
