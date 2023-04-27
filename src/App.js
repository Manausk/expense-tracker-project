import "./App.css";
import { AddTrasaction } from "./components/AddTrasaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTrasaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
