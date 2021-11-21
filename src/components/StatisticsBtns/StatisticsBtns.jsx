const StatisticsBtns = ({ openActivePage }) => {
  return (
    <>
      <button onClick={() => openActivePage("costs")} type="button">
        Все расходы
      </button>
      <button onClick={() => openActivePage("incomes")} type="button">
        Все доходы
      </button>
    </>
  );
};

export default StatisticsBtns;
