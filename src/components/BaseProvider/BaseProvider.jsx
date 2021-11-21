import { createContext, useState, useEffect } from "react";

export const BaseContext = createContext();


const BaseProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const toggleActivePage = (activePage = "") => setActivePage(activePage);

  const addTransaction = ({ transaction, transType }) => {
    transType === "costs" &&
      setCosts((prevCosts) => [...prevCosts, transaction]);
    transType === "incomes" &&
      setIncomes((prevIncomes) => [...prevIncomes, transaction]);
  };

  useEffect(() => {
    const parsedCosts = JSON.parse(localStorage.getItem("costs"));
    const parsedIncomes = JSON.parse(localStorage.getItem("incomes"));
    parsedCosts && setCosts(parsedCosts);
    parsedIncomes && setIncomes(parsedIncomes);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);
  return (
    <BaseContext.Provider
      value={{ activePage, costs, incomes, toggleActivePage, addTransaction }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseProvider;
