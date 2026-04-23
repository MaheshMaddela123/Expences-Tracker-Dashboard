import { createContext, useEffect, useReducer } from "react";

export const TransactionContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export const TransactionProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, [], () => {
    const data = localStorage.getItem("transactions");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("transactions")) || [];

    dispatch({ type: "SET", payload: existingData });
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionContext.Provider value={{ transactions, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};
