// Enter Starting Budget and display how much is left
import React from 'react';

export function BudgetAmount(props) {
  let expenseAmounts = props.expenseAmounts;
  let incomeAmounts = props.incomeAmounts;
  let budgetAmount = props.budgetAmount;
  let incomeAmount = props.incomeAmount;
  let expenseAmount = props.expenseAmount;

  let totalIncome = incomeAmounts.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalExpenses = expenseAmounts.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

  let updatedBudget = totalIncome - totalExpenses;

  const calculateBudget = (income, expenses) => {
    if (props.transactionType === true) {
      return income - expenses;
    } else {
      return income - expenses;
    }
  }

  const displayBudget = () => {

  }
  return (
    <div>
      <h1>Budget: {props.transactionType === true ? calculateBudget(totalIncome, totalExpenses) : calculateBudget(totalIncome, totalExpenses)}</h1>
    </div>
  );
}