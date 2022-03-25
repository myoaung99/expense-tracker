import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // get the array of amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  // total of all value, which is greater than 0
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // total of all value, which is smaller than 0
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{`+$${income}`}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{`-$${expense}`}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
