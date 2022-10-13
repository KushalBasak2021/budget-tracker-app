import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Budget() {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState(budget);
  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    dispatch({ type: "SET_BUDGET", payload: amount });
    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <div className="edit-budget">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      ) : (
        <div className="view-budget">
          <span>Budget: ₹{budget}</span>
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </>
  );
}

export default Budget;
