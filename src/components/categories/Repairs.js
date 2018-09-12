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
    <div>
      <div>
        <h3>Repairs Expenses</h3>
        <ul>
          {expenseItems}
        </ul>
      </div>
    </div >
  );
}