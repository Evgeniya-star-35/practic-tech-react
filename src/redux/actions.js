import { createAction } from '@reduxjs/toolkit';
export const addCost = createAction('costs/addCost');
export const addIncome = createAction('incomes/addIncome');
export const removeCost = createAction('costs/removeCost');
export const removeIncome = createAction('incomes/removeIncome');
