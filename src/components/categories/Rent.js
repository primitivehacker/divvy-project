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
    <div className="ExpenseComponents">
      <h4 className="ExpenseTitle">Rent Expenses</h4>
      <ul className="ExpenseItems">
        {expenseItems}
      </ul>
    </div>

  );
}