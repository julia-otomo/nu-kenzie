import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { HomePage } from "./Components/HomePage";

function App() {
  const [homePage, changeHomePage] = useState("home-page");
  return (
    <div className="App">
      {homePage === "home-page" ? (
        <HomePage changeHomePage={changeHomePage} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
