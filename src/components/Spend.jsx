import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Spend() {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div className="spend">
      <span>Spent: ₹{totalExpenses}</span>
    </div>
  );
}

export default Spend;
