import LabelInput from "../_share/LabelInput/LabelInput";

const CategoriesList = () => {
  return (
    <section>
      <LabelInput
        title="Зарплата"
        type="radio"
        name="category"
        value="salary"
      />
      <LabelInput title="Премия" type="radio" name="category" value="prize" />
      <form>
        <input
          type="text"
          name="categoryName"
          placeholder="Введите категорию..."
        />
      </form>
    </section>
  );
};

export default CategoriesList;
