import type { CategoryBudget } from './category-budget';
import type { User } from './user';

export type Budget = {
  id: number,
  month: Date | string,
  categoryBudgets?: Array<CategoryBudget>,
  user?: User
};
