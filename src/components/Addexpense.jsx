import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { AppContext } from "../context/AppContext";

function Addexpense() {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function handleClick() {
    let date = new Date();
    const expense = {
      id: nanoid(),
      name: name,
      date: date.toLocaleDateString(),
      cost: parseInt(cost),
    };

    dispatch({ type: "ADD_EXPENSE", payload: expense });
    setName("");
    setCost("");
  }
  return (
    <div className="Addexpense">
      <div className="inputs">
        <div className="input-div">
          <label>Name</label>
          <input
            required
            type="text"
            placeholder="Name of the expense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label>Cost</label>
          <input
            required
            type="text"
            placeholder="Cost of the expense"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>
      <button className="save" onClick={handleClick}>
        Save
      </button>
    </div>
  );
}

export default Addexpense;
