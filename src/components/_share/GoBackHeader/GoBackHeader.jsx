import { useHistory } from "react-router-dom";

const GoBackHeader = ({ title, children }) => {
  const { push, location } = useHistory();
  const handleGoBack = () => push(location.state?.from || "/");

  return (
    <header>
      <button onClick={handleGoBack} type="button">
        GoBack
      </button>
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

export default GoBackHeader;
