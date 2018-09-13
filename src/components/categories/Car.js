import React from 'react';
import { Expense } from '../Expense.js'

export function Car(props) {
  let category = props.category;
  const carExpenses = props.carExpenses;
  const expenseItems = carExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div className="ExpenseComponents">
      <h4 className="ExpenseTitle">Car Expenses</h4>
      <ul className="ExpenseItems">
        {expenseItems}
      </ul>
    </div>
  );
}