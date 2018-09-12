// Enter Starting Budget and display how much is left
import React from 'react';
import { Expense } from '../Expense.js'

export function Utilities(props) {
  let category = props.category;
  const utilitiesExpenses = props.utilitiesExpenses;
  const expenseItems = utilitiesExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div>
      <div>
        <h3>Utilities Expenses</h3>
        <ul>
          {expenseItems}
        </ul>
      </div>
    </div >
  );
}