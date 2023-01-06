import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { AppContext } from "../context/AppContext";

function Addexpense() {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function handleClick() {
    let date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const expense = {
      id: nanoid(),
      name: name,
      date: dd + "/" + mm + "/" + yyyy,
      cost: parseInt(cost),
    };

    dispatch({ type: "ADD_EXPENSE", payload: expense });
    setName("");
    setCost("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
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
            onKeyDown={handleKeyDown}
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
