import type { Category } from './category';
import type { Budget } from './budget';
import type { Transaction } from './transaction';

export type User = {
  id: number,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  currency: string,
  categories?: Array<Category>,
  budgets?: Array<Budget>,
  transactions?: Array<Transaction>,
};
