// Enter Starting Budget and display how much is left
import React from 'react';
import { Expense } from '../Expense.js'

export function Repairs(props) {
  let category = props.category;
  const repairsExpenses = props.repairsExpenses;
  const expenseItems = repairsExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div className="ExpenseComponents">
      <h4 className="ExpenseTitle">Repairs Expenses</h4>
      <ul className="ExpenseItems">
        {expenseItems}
      </ul>
    </div>
  );
}