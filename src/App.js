import Addexpense from "./components/Addexpense";
import Budget from "./components/Budget";
import Expenselist from "./components/Expenselist";
import Remaining from "./components/Remaining";
import Spend from "./components/Spend";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>My Budget Planner</h1>
        <div className="money-div">
          <Budget />
          <Remaining />
          <Spend />
        </div>
        <h2>Expenses</h2>
        <Expenselist />
        <h2>Add Expense</h2>
        <Addexpense />
      </div>
    </AppProvider>
  );
}

export default App;
