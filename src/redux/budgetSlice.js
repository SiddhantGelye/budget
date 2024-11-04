import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: [],
  expense: [],
  totalBudget: 0,
  incomeTotal: 0,
  expenseTotal: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addIncome(state, action) {
      state.income = [...state.income, action.payload];
    },

    addExpense(state, action) {
      state.expense = [...state.expense, action.payload];
    },

    deleteIncomeItem(state, action) {
      console.log("Deletion Activated");
      state.income = state.income.filter(
        (incomeItem) => incomeItem.id !== action.payload
      );
    },
    deleteExpenseItem(state, action) {
      console.log("Deletion Activated");
      state.expense = state.expense.filter(
        (expenseItem) => expenseItem.id !== action.payload
      );
    },
    addAllIncome(state, action) {
      state.income = action.payload;
    },

    addAllExpenses(state, action) {
      state.expense = action.payload;
    },
  },
});

export const {
  addIncome,
  addExpense,
  deleteIncomeItem,
  deleteExpenseItem,
  addAllExpenses,
  addAllIncome,
} = budgetSlice.actions;

export default budgetSlice.reducer;
