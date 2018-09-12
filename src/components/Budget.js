// Enter Starting Budget and display how much is left
import React from 'react';
import { IncomeTransactions } from './IncomeTransactions.js'
import { ExpenseTransactions } from './ExpenseTransactions.js'
import { BudgetAmount } from './BudgetAmount.js'
import { CategoryDropdown } from './CategoryDropdown'
import { Car } from './categories/Car'
import { Gas } from './categories/Gas'
import { Rent } from './categories/Rent'
import { Repairs } from './categories/Repairs'
import { Utilities } from './categories/Utilities'
import { Food } from './categories/Food'


class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetAmount: '',
      incomeAmount: '',
      expenseAmount: '',
      goodStanding: true,
      income: true,
      incomeAmounts: [],
      // expenseAmounts: [],
      carExpenses: [],
      gasExpenses: [],
      rentExpenses: [],
      foodExpenses: [],
      utilitiesExpenses: [],
      repairsExpenses: [],
      category: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.flipIncomeValue = this.flipIncomeValue.bind(this);
  }

  handleSubmit = () => {
    if (this.state.income === true) {
      let incomeAmounts = [...this.state.incomeAmounts];
      incomeAmounts.push(this.state.incomeAmount);
      this.setState({ incomeAmounts, incomeAmount: '' });
    } else if (this.state.category === 'Car') {
      let carExpenses = [...this.state.carExpenses];
      carExpenses.push(this.state.expenseAmount);
      this.setState({ carExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Gas') {
      let gasExpenses = [...this.state.gasExpenses];
      gasExpenses.push(this.state.expenseAmount);
      this.setState({ gasExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Rent') {
      let rentExpenses = [...this.state.rentExpenses];
      rentExpenses.push(this.state.expenseAmount);
      this.setState({ rentExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Utilities') {
      let utilitiesExpenses = [...this.state.utilitiesExpenses];
      utilitiesExpenses.push(this.state.expenseAmount);
      this.setState({ utilitiesExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Repairs') {
      let repairsExpenses = [...this.state.repairsExpenses];
      repairsExpenses.push(this.state.expenseAmount);
      this.setState({ repairsExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Food') {
      let foodExpenses = [...this.state.foodExpenses];
      foodExpenses.push(this.state.expenseAmount);
      this.setState({ foodExpenses, expenseAmount: '' });
    } else {
      return 'error';
    }
  }

  flipIncomeValue() {
    this.setState({ income: !this.state.income });
  }

  handleInputChange(event) {
    if (this.state.income) {
      this.setState({ incomeAmount: parseInt(event.target.value) });
    } else {
      this.setState({ expenseAmount: parseInt(event.target.value) });
    }

  }

  render() {

    return (
      <div>
        <BudgetAmount transactionType={this.state.income} incomeAmounts={this.state.incomeAmounts} carExpenses={this.state.carExpenses} gasExpenses={this.state.gasExpenses} foodExpenses={this.state.foodExpenses} rentExpenses={this.state.rentExpenses} utilitiesExpenses={this.state.utilitiesExpenses} repairsExpenses={this.state.repairsExpenses} budgetAmount={this.state.budgetAmount} incomeAmount={this.props.incomeAmount} expenseAmount={this.props.expenseAmount} category={this.state.category} />
        <div>
          <select value={this.state.income} onChange={this.flipIncomeValue}>
            <option value={true}>Income</option>
            <option value={false}>Expense</option>
          </select>
          <h2>Enter {this.state.income ? 'Income' : 'Expense'} </h2>
        </div>
        <input id="transactionValue" type="text" value={this.state.income ? this.state.incomeAmount : this.state.expenseAmount} onChange={this.handleInputChange} placeholder="Enter Value" />
        <CategoryDropdown handleChange={category => this.setState({ category })} category={this.state.category} categories={this.state.categories} isIncome={this.state.income} />
        <button onClick={this.handleSubmit}>Submit</button>
        <IncomeTransactions incomeAmounts={this.state.incomeAmounts} />
        {/* <ExpenseTransactions expenseAmounts={this.state.expenseAmounts} category={this.state.category} /> */}
        <Car carExpenses={this.state.carExpenses} category={this.state.category} />
        <Gas gasExpenses={this.state.gasExpenses} category={this.state.category} />
        <Rent rentExpenses={this.state.rentExpenses} category={this.state.category} />
        <Food foodExpenses={this.state.foodExpenses} category={this.state.category} />
        <Repairs repairsExpenses={this.state.repairsExpenses} category={this.state.category} />
        <Utilities utilitiesExpenses={this.state.utilitiesExpenses} category={this.state.category} />
      </div>
    );
  }
}

export default Budget;