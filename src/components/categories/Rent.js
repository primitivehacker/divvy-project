// Enter Starting Budget and display how much is left
import React from 'react';
import { Expense } from '../Expense.js'

export function Rent(props) {
  let category = props.category;
  const rentExpenses = props.rentExpenses;
  const expenseItems = rentExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div>
      <div>
        <h3>Rent Expenses</h3>
        <ul>
          {expenseItems}
        </ul>
      </div>
    </div >
  );
}