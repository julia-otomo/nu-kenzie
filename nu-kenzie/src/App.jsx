import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { HomePage } from "./Components/HomePage";

function App() {
  const [homePage, changeHomePage] = useState("home-page");
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      {homePage === "home-page" ? (
        <HomePage changeHomePage={changeHomePage} />
      ) : (
        <Dashboard
          changeHomePage={changeHomePage}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}

export default App;
