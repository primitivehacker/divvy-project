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
      incomeAmount: '',
      expenseAmount: '',
      // initialAmount: '',
      goodStanding: true,
      income: true,
      incomeAmounts: [],
      expenseAmounts: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.flipIncomeValue = this.flipIncomeValue.bind(this);
    // this.addToInitialAmount = this.addToInitialAmount.bind(this);
  }

  handleSubmit = () => {
    if (this.state.income === true) {
      let incomeAmounts = [...this.state.incomeAmounts];
      incomeAmounts.push(this.state.incomeAmount);
      this.setState({ incomeAmounts, incomeAmount: '' });
    } else {
      let expenseAmounts = [...this.state.expenseAmounts];
      expenseAmounts.push(this.state.expenseAmount);
      this.setState({ expenseAmounts, expenseAmount: '' });
    }

  }

  flipIncomeValue() {
    this.setState({ income: !this.state.income });
  }

  handleInputChange(event) {
    if (this.state.income) {
      this.setState({ incomeAmount: parseInt(event.target.value) || 0 });
    } else {
      this.setState({ expenseAmount: parseInt(event.target.value) || 0 });
    }

  }

  // addToInitialAmount(event) {
  //   this.setState({ initialAmount: parseInt(event.target.value) || 0 });
  // }

  // addInitialAmountToBudgetAmount = () => {
  //   if (this.state.initialAmount) {
  //     let initialAmount = this.state.initialAmount;
  //     this.setState({ budgetAmount: initialAmount, });
  //   } else {
  //     console.log('There was an error');
  //   }

  // }

  render() {

    return (
      <div>
        <BudgetAmount transactionType={this.state.income} incomeAmounts={this.state.incomeAmounts} expenseAmounts={this.state.expenseAmounts} budgetAmount={this.state.budgetAmount} />
        <h2>Enter Budget</h2>
        {/* <input type="text" value={this.state.initialAmount} onChange={this.addToInitialAmount} />
        <button onClick={this.addInitialAmountToBudgetAmount}>Submit</button>
        <br /> <br /> <br /> */}
        <div>
          <select value={this.state.income} onChange={this.flipIncomeValue}>
            <option value={true}>Income</option>
            <option value={false}>Expense</option>
          </select>
          <h2>Enter {this.state.income ? 'Income' : 'Expense'} </h2>
        </div>
        <input id="transactionValue" type="text" value={this.state.income ? this.state.incomeAmount : this.state.expenseAmount} onChange={this.handleInputChange} placeholder="Enter Value" />
        <button onClick={this.handleSubmit}>Submit</button>
        <IncomeTransactions incomeAmounts={this.state.incomeAmounts} />
        <ExpenseTransactions expenseAmounts={this.state.expenseAmounts} />
      </div>
    );
  }
}

export default Budget;