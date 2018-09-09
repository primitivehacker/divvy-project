// Enter Starting Budget and display how much is left
import React from 'react';
import { Expense } from './Expense.js'

export function ExpenseTransactions(props) {
  const expenseAmounts = props.expenseAmounts;
  const expenseItems = expenseAmounts.map((expense, index) =>
    <Expense key={index} value={expense} />
  );
  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenseItems}
      </ul>
    </div>
  );
}