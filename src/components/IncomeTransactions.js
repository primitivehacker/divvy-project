// Enter Starting Budget and display how much is left
import React from 'react';
import { Income } from './Income.js'
import '../styles/App.css';
// import Expense from './Expense.js'

export function IncomeTransactions(props) {
  const incomeAmounts = props.incomeAmounts;
  const incomeItems = incomeAmounts.map((income, index) =>
    <Income key={index} value={income} />
  );
  return (
    <div className="IncomeComponents">
      <h4 className="IncomeTitle">Income</h4>
      <ul className="IncomeItems">
        {incomeItems}
      </ul>
    </div>
  );
}