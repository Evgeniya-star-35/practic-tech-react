import { useContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import shortid from 'shortid';
import { BaseContext } from '../BaseProvider/BaseProvider';
import Form from '../_share/Form/Form';
import GoBackHeader from '../_share/GoBackHeader/GoBackHeader';
import CategoriesList from '../CategoriesList/CategoriesList';
import transactionFormOptios from '../../assets/options/transactionFormOptions';

const TransactionPage = ({ match, history, location }) => {
  const {
    toggleActivePage,
    addTransaction,
    activePage: transType,
  } = useContext(BaseContext);

  const { push } = history;

  const [form, setForm] = useState({
    date: '',
    time: '',
    category: transType === 'incomes' ? 'Зарплата' : 'Еда',
    sum: '',
    currency: 'USD',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(transType);
    addTransaction({
      transaction: { ...form, id: shortid.generate() },
      transType,
    });
    toggleActivePage();
  };

  const openCategoryList = () => {
    const newLocation = {
      pathname: match.url + '/cat-list',
      state: { string: 'newStateLoacation', from: location },
    };
    push(newLocation);
  };

  return (
    <section>
      <GoBackHeader
        title={transType === 'costs' ? 'Расходы' : 'Доходы'}
        handleGoBack={toggleActivePage}
      />
      <Switch>
        <Route path={match.path + '/cat-list'}>
          <CategoriesList />
        </Route>
        <Route>
          <Form
            cbOnSubmit={handleSubmit}
            dataForm={form}
            formOptions={transactionFormOptios}
            handleChange={handleChange}
            handleClick={openCategoryList}
          />
        </Route>
      </Switch>
    </section>
  );
};

export default TransactionPage;
