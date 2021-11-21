import LabelInput from "../LabelInput/LabelInput";

const Form = ({
  cbOnSubmit,
  formOptions,
  dataForm,
  handleChange,
  handleClick,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Ok</button>
      {formOptions.map((option) => (
        <LabelInput
          key={option.name}
          {...option}
          value={dataForm[option.name]}
          cbOnChange={option.type !== "button" ? handleChange : null}
          cbOnClick={option.type === "button" ? handleClick : null}
        />
      ))}
    </form>
  );
};

export default Form;
