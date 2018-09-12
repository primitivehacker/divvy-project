// Enter Starting Budget and display how much is left
import React from 'react';
import { Expense } from '../Expense.js'

export function Food(props) {
  let category = props.category;
  const foodExpenses = props.foodExpenses;
  const expenseItems = foodExpenses.map((expense, index) =>
    <Expense key={index} value={expense} category={category} />
  );

  return (
    <div>
      <div>
        <h3>Food Expenses</h3>
        <ul>
          {expenseItems}
        </ul>
      </div>
    </div >
  );
}