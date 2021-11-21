import { createSlice } from '@reduxjs/toolkit';
const add = 'add';
const getAll = 'getAll';
const remove = 'remove';
const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    costs: [],
    incoms: [],
  },
  extraReducers: {
    [add]: (state, action) => {},
    [getAll]: (state, action) => {},
    [remove]: (state, action) => {},
  },
});
export default transactionSlice.reducer;
