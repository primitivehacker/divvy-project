import React from 'react';
import { Expense } from '../Expense.js'

export function Utilities(props) {
  let category = props.category;
  const utilitiesExpenses = props.utilitiesExpenses;
  const expenseItems = utilitiesExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div className="ExpenseComponents">
      <h4 className="ExpenseTitle">Utilities Expenses</h4>
      <ul className="ExpenseItems">
        {expenseItems}
      </ul>
    </div>

  );
}