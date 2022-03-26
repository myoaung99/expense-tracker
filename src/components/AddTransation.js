import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransation = () => {
  // inital state for both input fields
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // extract add function from ctx
  const { addTransaction } = useContext(GlobalContext);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(parseInt(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()),
      text: text,
      amount: amount,
    };
    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            autoComplete="off"
            value={text}
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={textChangeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount.toString()}
            type="number"
            id="amount"
            placeholder="Enter amount..."
            onChange={amountChangeHandler}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransation;
