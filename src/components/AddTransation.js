import React, { useState } from "react";

const AddTransation = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
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
            value={amount}
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
