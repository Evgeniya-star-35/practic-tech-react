import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './slices';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
