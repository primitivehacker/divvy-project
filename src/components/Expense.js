// Enter Starting Budget and display how much is left
import React from 'react';

export function Expense(props) {
  let category = props.category;
  let value = props.value;
  return (
    <div>
      <h4>{value}</h4>
    </div>
  );
}