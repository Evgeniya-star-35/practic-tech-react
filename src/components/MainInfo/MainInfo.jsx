
const MainInfo = ({
  title,
  currency = "USD",
  options,
  openActivePage,
  activePage,
}) => {
  const handleClick = () => openActivePage(activePage);

  return (
    <section>
      <h2>{title}</h2>
      <p>{currency}</p>
      <ul>
        {options.map(({ period, sum, name }) => (
          <li key={name}>
            <span>{period}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleClick} type="button">
        Add
      </button>
    </section>
  );
};

export default MainInfo;
