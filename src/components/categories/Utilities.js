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
    <div className="ExpenseItem">
      <h4>Utilities Expenses</h4>
      <ul>
        {expenseItems}
      </ul>
    </div>

  );
}