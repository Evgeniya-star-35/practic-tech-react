import PropTypes from "prop-types";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";

const BalancePage = ({ closeActivePage, transactions }) => {
  return (
    <>
      <GoBackHeader handleGoBack={closeActivePage} title="Баланс за год" />
      <ul>
        {transactions.map(({ date, category, sum, id }) => (
          <li key={id}>
            <span>{date}</span>
            <span>{category}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BalancePage;

BalancePage.propTypes = {
  closeActivePage: PropTypes.func.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      sum: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
