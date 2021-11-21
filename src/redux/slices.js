import { createSlice } from '@reduxjs/toolkit';
import { addCost, addIncome, removeCost, removeIncome } from './actions';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    costs: [],
    incomes: [],
  },
  extraReducers: {
    [addCost]: (state, action) => {
      return {
        ...state,
        costs: [...state.costs, action.payload],
      };
    },
    'incomes/addIncome': (state, action) => {
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    },
    'costs/removeCost': (state, action) => {
      return {
        ...state,
        costs: state.costs.filter(cost => cost.id !== action.payload),
      };
    },
    'incomes/removeIncome': (state, action) => {
      return {
        ...state,
        incomes: state.incomes.filter(income => income.id !== action.payload),
      };
    },
  },
});
// export const { addCost, addIncome, removeCost, removeIncome } = transactionSlice.actions
export default transactionSlice.reducer;
