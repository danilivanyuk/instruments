import { BudgetList } from '@/features/budgetsList';
import React from 'react';

export const Budgets = () => {
  return (
    <div className="w-full bg-blue-100 p-6">
      <div className="mb-6">
        <p>User Name</p>
      </div>
      <BudgetList />
    </div>
  );
};
