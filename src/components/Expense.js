import React from 'react';

export function Expense(props) {
  let category = props.category;
  let value = props.value;
  return (
    <div className="ExpenseItem">
      <h4>{value}</h4>
    </div>
  );
}