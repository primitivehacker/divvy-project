// Enter Starting Budget and display how much is left
import React from 'react';
import { IncomeTransactions } from './IncomeTransactions.js'
import { ExpenseTransactions } from './ExpenseTransactions.js'
import { BudgetAmount } from './BudgetAmount.js'

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetAmount: '',
      initialAmount: '',
      goodStanding: true,
      income: true,
      incomeAmounts: [],
      expenseAmounts: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.flipIncomeValue = this.flipIncomeValue.bind(this);
    this.addToInitialAmount = this.addToInitialAmount.bind(this);
  }

  handleSubmit = () => {
    if (this.state.income === true) {
      let incomeAmounts = [...this.state.incomeAmounts];
      incomeAmounts.push(this.state.budgetAmount);
      this.setState({ incomeAmounts, budgetAmount: '' });
    } else {
      let expenseAmounts = [...this.state.expenseAmounts];
      expenseAmounts.push(this.state.budgetAmount);
      this.setState({ expenseAmounts, budgetAmount: '' });
    }

  }

  flipIncomeValue() {
    this.setState({ income: !this.state.income });
  }

  handleInputChange(event) {
    this.setState({ budgetAmount: parseInt(event.target.value) || 0 });
  }

  addToInitialAmount(event) {
    this.setState({ initialAmount: parseInt(event.target.value) || 0 });
  }

  addInitialAmountToBudgetAmount = () => {
    if (this.state.initialAmount) {
      let initialAmount = this.state.initialAmount;
      let budgetAmount = this.state.budgetAmount;
      this.setState({ budgetAmount: initialAmount, });
    } else {
      console.log('There was an error');
    }

  }

  render() {

    return (
      <div>
        <BudgetAmount transactionType={this.state.income} incomeAmounts={this.state.incomeAmounts} expenseAmounts={this.state.expenseAmounts} budgetAmount={this.state.budgetAmount} />
        <h2>Enter Budget</h2>
        <input type="text" value={this.state.initialAmount} onChange={this.addToInitialAmount} />
        <button onClick={this.addInitialAmountToBudgetAmount}>Submit</button>
        <br /> <br /> <br />
        <div>
          <select value={this.state.income} onChange={this.flipIncomeValue}>
            <option value={true}>Income</option>
            <option value={false}>Expense</option>
          </select>
          <h2>Enter {this.state.income ? 'Income' : 'Expense'} </h2>
        </div>
        <input id="transactionValue" type="text" value={this.state.budgetAmount} onChange={this.handleInputChange} placeholder="Enter Value" />
        <button onClick={this.handleSubmit}>Submit</button>
        <IncomeTransactions incomeAmounts={this.state.incomeAmounts} />
        <ExpenseTransactions expenseAmounts={this.state.expenseAmounts} />
      </div>
    );
  }
}

export default Budget;