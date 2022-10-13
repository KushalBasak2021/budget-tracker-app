import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

function Expenselist() {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  function handleChange(e) {
    setFilteredExpenses(
      expenses.filter((exp) => exp.name.toLowerCase().includes(e.target.value))
    );
  }
  return (
    <div className="expense-div">
      <input type="text" placeholder="type to search" onChange={handleChange} />
      <div className="expense-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </div>
    </div>
  );
}

export default Expenselist;
