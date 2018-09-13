import React from 'react';
import { Expense } from '../Expense.js'

export function Food(props) {
  let category = props.category;
  const foodExpenses = props.foodExpenses;
  const expenseItems = foodExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div className="ExpenseComponents">
      <h4 className="ExpenseTitle">Food Expenses</h4>
      <ul className="ExpenseItems">
        {expenseItems}
      </ul>
    </div>
  );
}