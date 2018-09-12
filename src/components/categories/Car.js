// Enter Starting Budget and display how much is left
import React from 'react';
import { Expense } from '../Expense.js'

export function Car(props) {
  let category = props.category;
  const carExpenses = props.carExpenses;
  const expenseItems = carExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div className="ExpenseItem">
      <h4>Car Expenses</h4>
      <ul >
        {expenseItems}
      </ul>
    </div>
  );
}