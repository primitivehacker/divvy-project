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
    <div>
      <div>
        <h3>Car Expenses</h3>
        <ul>
          {expenseItems}
        </ul>
      </div>
    </div >
  );
}