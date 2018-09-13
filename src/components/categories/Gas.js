import React from 'react';
import { Expense } from '../Expense.js'

export function Gas(props) {
  let category = props.category;
  const gasExpenses = props.gasExpenses;
  const expenseItems = gasExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div className="ExpenseComponents">
      <h4 className="ExpenseTitle">Gas Expenses</h4>
      <ul className="ExpenseItems">
        {expenseItems}
      </ul>
    </div>

  );
}