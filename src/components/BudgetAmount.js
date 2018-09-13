// Enter Starting Budget and display how much is left
import React from 'react';

export function BudgetAmount(props) {
  let carExpenses = props.carExpenses;
  let gasExpenses = props.gasExpenses;
  let rentExpenses = props.rentExpenses;
  let foodExpenses = props.foodExpenses;
  let utilitiesExpenses = props.utilitiesExpenses;
  let repairsExpenses = props.repairsExpenses;

  let incomeAmounts = props.incomeAmounts;

  let category = props.category;

  let totalIncome = incomeAmounts.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalGasExpenses = gasExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalCarExpenses = carExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalRentExpenses = rentExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalFoodExpenses = foodExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalUtilitiesExpenses = utilitiesExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  let totalRepairsExpenses = repairsExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

  let totalExpenses = totalGasExpenses + totalCarExpenses + totalRentExpenses + totalFoodExpenses + totalUtilitiesExpenses + totalRepairsExpenses;

  // let updatedBudget = totalIncome - totalExpenses;



  const calculateBudget = (income, expenses) => {
    if (props.transactionType === true) {
      return income - expenses;
    } else {
      return income - expenses;
    }
  }



  return (
    <div>
      <h1>Budget: {props.transactionType === true ? calculateBudget(totalIncome, totalExpenses) : calculateBudget(totalIncome, totalExpenses)}</h1>
    </div>
  );
}