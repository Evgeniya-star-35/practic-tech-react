import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionHistoryPage from "../_pages/TransactionHistoryPage";
import { BaseContext } from "../BaseProvider/BaseProvider";
import queryString from "query-string";

// const parse = queryString.parse("?color=green&size=m");
// console.log("parse :>> ", parse);

const App = () => {
  const { costs, incomes, toggleActivePage } = useContext(BaseContext);

  const transactions = [...incomes, ...costs];
  const closeActivePage = () => toggleActivePage();

  return (
    <>
      <Switch>
        <Route
          path="/transaction/:transType"
          exact
          component={TransactionPage}
        />
        <Route path="/history/:transType" component={TransactionHistoryPage} />
        <Route
          path="/balance"
          render={(routerProps) => (
            <BalancePage
              {...routerProps}
              transactions={transactions}
              closeActivePage={closeActivePage}
            />
          )}
        />
        <Route path="/" exact component={MainPage} />
        <Route path="/notFound">
          <h1>PageNotFound</h1>
        </Route>
        <Redirect to="/notFound" />
      </Switch>
    </>
  );
};

export default App;

// switch (location.pathname) {
//   case "costs":
//     return <TransactionPage />;
//   case "incomes":
//     return <TransactionPage />;
//   case "balance":
//     return <BalancePage />;
//   case "costsHistory":
//     return <TransactionHistoryPage />;
//   case "incomesHistory":
//     return <TransactionHistoryPage />;
//   default:
//     return <MainPage />;
// }
