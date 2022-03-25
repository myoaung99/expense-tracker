import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance.js";
import IncomeExpenses from "./components/IncomeExpenses";
import TransationList from "./components/TransationList";
import AddTransation from "./components/AddTransation";

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransation />
      </div>
    </div>
  );
}

export default App;
