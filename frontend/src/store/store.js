import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./features/income";
import { expenseReducer } from "./features/expense";
import { savingReducer } from "./features/saving";

const store = configureStore({
  reducer: {
    income: incomeReducer,
    expense: expenseReducer,
    saving: savingReducer,
  },
});

export default store;
