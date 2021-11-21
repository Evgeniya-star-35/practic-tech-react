import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import BaseProvider from './components/BaseProvider/BaseProvider';
import './index.css';

// import { createContext } from "react";

// const BaseContext = createContext();

// console.log("BaseContext :>> ", BaseContext);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseProvider>
        <App />
      </BaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
