// Enter Starting Budget and display how much is left
import React from 'react';
import { Expense } from '../Expense.js'

export function Gas(props) {
  let category = props.category;
  const gasExpenses = props.gasExpenses;
  const expenseItems = gasExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div>
      <div>
        <h3>Gas Expenses</h3>
        <ul>
          {expenseItems}
        </ul>
      </div>
    </div >
  );
}