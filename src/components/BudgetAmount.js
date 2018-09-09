// Enter Starting Budget and display how much is left
import React from 'react';

export function BudgetAmount(props) {
  let expenseAmounts = props.expenseAmounts;
  let incomeAmounts = props.incomeAmounts;
  let budgetAmount = props.budgetAmount;


  let totalIncome = incomeAmounts.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalExpenses = expenseAmounts.reduce((accumulator, currentVal) => accumulator + currentVal, -totalIncome);

  const calculateBudget = (value) => {
    if (props.transactionType === true) {
      return budgetAmount + value;
    } else {
      return budgetAmount - value;
    }
  }
  return (
    <div>
      <h1>Budget: {props.transactionType === true ? calculateBudget(totalIncome) : calculateBudget(totalExpenses)}</h1>
    </div>
  );
}