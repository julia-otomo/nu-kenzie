import "../TotalMoney/index.css";

export function TotalMoney({ listTransactions }) {
  let totalValue = listTransactions.reduce((accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue.value);
  }, 0);

  console.log(listTransactions);

  return (
    <div className="totalValue__container">
      <div className="totalValue__container--description">
        <h2>Valor total:</h2>
        <p>O valor se refere ao saldo</p>
      </div>

      <h2>R${totalValue},00</h2>
    </div>
  );
}
