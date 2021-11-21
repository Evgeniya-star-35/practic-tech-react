import LabelInput from '../LabelInput/LabelInput';
// import { addCost } from '../../../redux/actions';
// import { useDispatch } from 'react-redux';

const Form = ({
  cbOnSubmit,
  formOptions,
  dataForm,
  handleChange,
  handleClick,
}) => {
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   addCost({
    //     value: '',
    //   }),
    // );
    cbOnSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Ok</button>
      {formOptions.map(option => (
        <LabelInput
          key={option.name}
          {...option}
          value={dataForm[option.name]}
          cbOnChange={option.type !== 'button' ? handleChange : null}
          cbOnClick={option.type === 'button' ? handleClick : null}
        />
      ))}
    </form>
  );
};

export default Form;
