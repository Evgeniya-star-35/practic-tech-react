const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder = null,
  cbOnChange = null,
  cbOnClick = null,
}) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={cbOnChange}
        onClick={cbOnClick}
      />
    </label>
  );
};

export default LabelInput;
