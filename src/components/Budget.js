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
import PieChart from 'react-minimal-pie-chart'
import { Legend } from './Legend'



import '../styles/App.css';


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

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.income === true) {
      let incomeAmounts = [...this.state.incomeAmounts];
      incomeAmounts.push(this.state.incomeAmount);
      this.setState({ incomeAmounts, incomeAmount: '' });
    } else if (this.state.category === 'Car' && this.state.expenseAmount) {
      let carExpenses = [...this.state.carExpenses];
      carExpenses.push(this.state.expenseAmount);
      this.setState({ carExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Gas' && this.state.expenseAmount) {
      let gasExpenses = [...this.state.gasExpenses];
      gasExpenses.push(this.state.expenseAmount);
      this.setState({ gasExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Rent' && this.state.expenseAmount) {
      let rentExpenses = [...this.state.rentExpenses];
      rentExpenses.push(this.state.expenseAmount);
      this.setState({ rentExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Utilities' && this.state.expenseAmount) {
      let utilitiesExpenses = [...this.state.utilitiesExpenses];
      utilitiesExpenses.push(this.state.expenseAmount);
      this.setState({ utilitiesExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Repairs' && this.state.expenseAmount) {
      let repairsExpenses = [...this.state.repairsExpenses];
      repairsExpenses.push(this.state.expenseAmount);
      this.setState({ repairsExpenses, expenseAmount: '' });
    } else if (this.state.category === 'Food' && this.state.expenseAmount) {
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

    let totalGasExpenses = this.state.gasExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    let totalCarExpenses = this.state.carExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    let totalRentExpenses = this.state.rentExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    let totalFoodExpenses = this.state.foodExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    let totalUtilitiesExpenses = this.state.utilitiesExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    let totalRepairsExpenses = this.state.repairsExpenses.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

    return (
      <div className="Budget">
        <div className="BudgetAmount">
          <BudgetAmount transactionType={this.state.income} incomeAmounts={this.state.incomeAmounts} carExpenses={this.state.carExpenses} gasExpenses={this.state.gasExpenses} foodExpenses={this.state.foodExpenses} rentExpenses={this.state.rentExpenses} utilitiesExpenses={this.state.utilitiesExpenses} repairsExpenses={this.state.repairsExpenses} budgetAmount={this.state.budgetAmount} incomeAmount={this.props.incomeAmount} expenseAmount={this.props.expenseAmount} category={this.state.category} />
        </div>
        <div className="InputContainer">
          <div className="InputSection">
            <div className="Select">
              <select value={this.state.income} onChange={this.flipIncomeValue}>
                <option value={true}>Income</option>
                <option value={false}>Expense</option>
              </select>
            </div>
            <div className="Category">
              <h5>Enter {this.state.income ? 'Income' : 'Expense'} </h5>
            </div>
            <div className="Input">
              <form onSubmit={this.handleSubmit}>
                <input id="transactionValue" type="number" value={this.state.income ? this.state.incomeAmount : this.state.expenseAmount} onChange={this.handleInputChange} placeholder="Enter Value" />
              </form>
            </div>
            <div className="Dropdown">
              <CategoryDropdown handleChange={category => this.setState({ category })} category={this.state.category} categories={this.state.categories} isIncome={this.state.income} />
            </div>
            <div className="SubmitButton">
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
        <div className="Transactions">
          <div className="Income">
            <IncomeTransactions incomeAmounts={this.state.incomeAmounts} />
          </div>
          <div className="Expenses">
            <Car carExpenses={this.state.carExpenses} category={this.state.category} />
            <Gas gasExpenses={this.state.gasExpenses} category={this.state.category} />
            <Rent rentExpenses={this.state.rentExpenses} category={this.state.category} />
            <Food foodExpenses={this.state.foodExpenses} category={this.state.category} />
            <Repairs repairsExpenses={this.state.repairsExpenses} category={this.state.category} />
            <Utilities utilitiesExpenses={this.state.utilitiesExpenses} category={this.state.category} />
          </div>
        </div>
        <PieChart
          data={[
            { title: 'Car', value: totalCarExpenses, color: '#ff5252' },
            { title: 'Gas', value: totalGasExpenses, color: '#448aff' },
            { title: 'Rent', value: totalRentExpenses, color: '#455a64' },
            { title: 'Food', value: totalFoodExpenses, color: '#69f0ae' },
            { title: 'Repairs', value: totalRepairsExpenses, color: '#ffff00' },
            { title: 'Utilities', value: totalUtilitiesExpenses, color: '#40c4ff' },
          ]}
        />
        <div className="Legend">
          <Legend />
        </div>


      </div>
    );
  }
}



export default Budget;