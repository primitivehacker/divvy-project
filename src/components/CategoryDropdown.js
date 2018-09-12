// Enter Starting Budget and display how much is left
import React from 'react';

export function CategoryDropdown(props) {
  let isIncome = props.isIncome;
  let category = props.category;

  if (isIncome === false) {
    return (
      <select value={category} onChange={event => props.handleChange(event.target.value)}>
        <option>Select Category</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
        <option value="Food">Food</option>
        <option value="Car">Car</option>
        <option value="Gas">Gas</option>
        <option value="Repairs">Repairs</option>
      </select>
    );
  } else {
    return ''
  }
}