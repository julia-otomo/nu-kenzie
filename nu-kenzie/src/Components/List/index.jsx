import { Card } from "../Card";

export function List({ listTransactions, setListTransactions }) {
  return (
    <ul className="transactions__list">
      {listTransactions.map((transaction) => {
        return (
          <Card
            transaction={transaction}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        );
      })}
    </ul>
  );
}
