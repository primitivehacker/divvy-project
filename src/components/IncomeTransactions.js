// Enter Starting Budget and display how much is left
import React from 'react';
import { Income } from './Income.js'
// import Expense from './Expense.js'

export function IncomeTransactions(props) {
  const incomeAmounts = props.incomeAmounts;
  const incomeItems = incomeAmounts.map((income, index) =>
    <Income key={index} value={income} />
  );
  return (
    <div>
      <h3>Income</h3>
      <ul>
        {incomeItems}
      </ul>
    </div>
  );
}