export function Card({ transaction, listTransactions, setListTransactions }) {
  function removeTransaction(e) {
    let buttonId = e.target.id;
    let filteredTransactions = listTransactions.filter(
      (transactions) => transactions.id !== buttonId
    );

    setListTransactions(filteredTransactions);
  }

  if (transaction.valueType === "Entrada") {
    return (
      <li key={transaction.id} className={green__card}>
        <div className="transaction__title">
          <h3>{transaction.description}</h3>
          <p>{transaction.valueType}</p>
        </div>
        <div className="transaction__value">
          <p>{transaction.value}</p>
          <button onClick={removeTransaction} id={transaction.id}></button>
        </div>
      </li>
    );
  } else {
    return (
      <li key={transaction.id}>
        <div className="transaction__title">
          <h3>{transaction.description}</h3>
          <p>{transaction.valueType}</p>
        </div>
        <div className="transaction__value">
          <p>{transaction.value}</p>
          <button onClick={removeTransaction} id={transaction.id}></button>
        </div>
      </li>
    );
  }
}
