import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import BaseProvider from './components/BaseProvider/BaseProvider';
import { store } from './redux/store';
import './index.css';

// import { createContext } from "react";

// const BaseContext = createContext();

// console.log("BaseContext :>> ", BaseContext);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseProvider>
          <App />
        </BaseProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
