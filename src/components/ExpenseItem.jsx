import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseItem({ expense }) {
  const { dispatch } = useContext(AppContext);
  function handleDelete() {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: expense.id,
    });
  }
  return (
    <div className="expense-item">
      <p>{expense.name}</p>
      <div className="right">
        <p>{expense.date}</p>
        <p>₹{expense.cost}</p>
        <i className="fa-solid fa-circle-xmark" onClick={handleDelete}></i>
      </div>
    </div>
  );
}

export default ExpenseItem;
