import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("");

  function createTransaction(e) {
    e.preventDefault();

    const transaction = {
      id: uuid(),
      description,
      value,
      valueType,
    };

    setListTransactions([...listTransactions, transaction]);
  }

  return (
    <form onSubmit={createTransaction}>
      <label htmlFor="transactionDescript">Descrição</label>
      <input
        type="text"
        id="transactionDescript"
        placeholder="Digite aqui sua descrição"
        onChange={(e) => setDescription(e.target.value)}
      />
      <p>Ex: Compra de roupas</p>

      <div className="valueInput__container">
        <div className="valueInput__container--addValueSymbol">
          <label htmlFor="transactionValue">Valor</label>
          <input
            type="text"
            id="transactionValue"
            placeholder="1"
            onChange={(e) => setValue(e.target.value)}
          />
          <span>R$</span>
        </div>
        <label htmlFor="transactionValueType">Tipo de valor</label>
        <select
          name="typeOfValue"
          id="typeOfValue"
          onChange={(e) => setValueType(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <button type="submit">Inserir Valor</button>
    </form>
  );
}
