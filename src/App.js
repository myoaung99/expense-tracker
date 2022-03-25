import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance.js";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <>
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
      </div>
    </>
  );
}

export default App;
