import { Card } from "../Card";
import "../List/index.css";

export function List({ listTransactions, setListTransactions }) {
  return (
    <ul className="transactions__list">
      {listTransactions.map((transaction) => {
        return (
          <Card
            transaction={transaction}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            key={transaction.id}
          />
        );
      })}
    </ul>
  );
}
