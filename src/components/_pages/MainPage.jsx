import { useContext } from "react";
import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from "../StatisticsBtns/StatisticsBtns";
import { BaseContext } from "../BaseProvider/BaseProvider";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../assets/data/mainInfoOptions.json";

const MainPage = ({ history }) => {
  const { toggleActivePage } = useContext(BaseContext);

  const { push, location } = history;

  // /transaction/costs || /transaction/incomes

  const getNextLocation = (pathname) => ({
    state: {
      from: location,
    },
    pathname,
  });

  const openTransactionPage = (transType) =>
    push(getNextLocation("/transaction/" + transType));
  const openBalancePage = (activePage) =>
    push(getNextLocation("/" + activePage));
  const openHistoryPage = (transType) =>
    push(getNextLocation("/history/" + transType));

  return (
    <section>
      <h1>Журнал расходов</h1>
      <MainInfo
        openActivePage={openTransactionPage}
        options={mainInfoCosts}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        openActivePage={openTransactionPage}
        options={mainInfoIncomes}
        title="Доходы"
        activePage="incomes"
      />
      <MainInfo
        openActivePage={openBalancePage}
        options={mainInfoBalance}
        title="Баланс"
        activePage="balance"
      />
      <StatisticsBtns openActivePage={openHistoryPage} />
    </section>
  );
};

export default MainPage;
