import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// ဒါက transaction component တစ်ခုတည်း
// parent component မှာ loop လုပ်ပြီး လိုသလောက် ထုတ်လိုက်တာ
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const clickHandler = () => {
    // parent ကထည့်ပေးလိုက်တဲ့ ဒီ transaction ရဲ့ id
    deleteTransaction(transaction.id);
  };

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={clickHandler} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
