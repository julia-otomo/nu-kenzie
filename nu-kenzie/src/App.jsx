import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { HomePage } from "./Components/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  const [homePage, changeHomePage] = useState("home-page");
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
