import React, { createContext, useReducer } from "react";

// initial State
const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

//AppReducer
const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.transaction, ...state.transactions],
      };
    default:
      return state;
  }
};

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransactionHandler = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      id: id,
    });
  };

  const addTransactionHandler = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      transaction: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransactionHandler,
        addTransaction: addTransactionHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
