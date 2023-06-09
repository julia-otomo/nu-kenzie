import { EmptyList } from "../EmptyList";
import { Form } from "../Form";
import { List } from "../List";
import "../Dashboard/index.css";
import { TotalMoney } from "../TotalMoney";

export function Dashboard({
  changeHomePage,
  listTransactions,
  setListTransactions,
}) {
  return (
    <>
      <header className="dashboard__header">
        <div className="header__container">
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <button onClick={() => changeHomePage("home-page")}>Início</button>
        </div>
      </header>

      <main className="dashboard__main">
        <div className="main__container">
          <div className="form__container">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />

            {listTransactions.length > 0 ? (
              <TotalMoney listTransactions={listTransactions} />
            ) : null}
          </div>

          <div className="transactions__container">
            <h3>Resumo financeiro</h3>
            {listTransactions.length === 0 ? (
              <EmptyList />
            ) : (
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
