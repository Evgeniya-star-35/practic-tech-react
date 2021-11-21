import { createContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCosts, getIncomes } from '../../redux/selectors';
import {
  addCost,
  addIncome,
  removeCost,
  removeIncome,
} from '../../redux/actions';
// console.log(addCost, addIncome, removeCost, removeIncome)

export const BaseContext = createContext();

const BaseProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('');
  const dispatch = useDispatch();
  const costs = useSelector(getCosts);
  const incomes = useSelector(getIncomes);

  const toggleActivePage = (activePage = '') => setActivePage(activePage);

  const addTransaction = ({ transaction, transType }) => {
    // console.log(transaction);
    // console.log(transType);

    transType === 'costs' && dispatch(addCost(transaction));
    // setCosts((prevCosts) => [...prevCosts, transaction]);
    transType === 'incomes' && dispatch(addIncome(transaction));
    // setIncomes((prevIncomes) => [...prevIncomes, transaction]);
  };

  // useEffect(() => {
  //   const parsedCosts = JSON.parse(localStorage.getItem("costs"));
  //   const parsedIncomes = JSON.parse(localStorage.getItem("incomes"));
  //   parsedCosts && setCosts(parsedCosts);
  //   parsedIncomes && setIncomes(parsedIncomes);
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("costs", JSON.stringify(costs));
  // }, [costs]);

  // useEffect(() => {
  //   localStorage.setItem("incomes", JSON.stringify(incomes));
  // }, [incomes]);
  return (
    <BaseContext.Provider
      value={{ activePage, costs, incomes, toggleActivePage, addTransaction }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseProvider;
