import { useContext } from "react";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";
import { BaseContext } from "../BaseProvider/BaseProvider";

const TransactionHistoryPage = () => {
  const { toggleActivePage, costs, incomes, activePage } =
    useContext(BaseContext);

  const transactions = activePage === "costsHistory" ? costs : incomes;

  const total = transactions.reduce((acc, { sum }) => acc + Number(sum), 0);

  return (
    <section>
      <GoBackHeader handleGoBack={toggleActivePage}>
        <select name="period">
          <option value="day">День</option>
        </select>
        <button type="button">Go TO Diagram</button>
      </GoBackHeader>
      <button type="button" name="prev">
        Prev
      </button>
      <LabelInput
        title={"Октябрь 2021"}
        type="date"
        name="date"
        value="2021-10-24"
        cbOnChange={() => {}}
      />
      <button type="button" name="next">
        Next
      </button>
      <table>
        <thead>
          <tr>
            <th>Всего:</th>
            <th>{total}</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ category, sum, id }) => (
            <tr key={id}>
              <td>{category}</td>
              <td>{sum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistoryPage;
