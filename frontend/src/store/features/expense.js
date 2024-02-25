import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  expenses: [],
  isLoading: false,
  error: "",
  filter: {
    sortBy: "",
    category: "",
  },
};

const API = "http://localhost:5000/api/v1/expenses";

export const fetchExpenses = createAsyncThunk("fetchExpenses", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addNewExpense = createAsyncThunk(
  "addNewExpense",
  async (expenseData) => {
    const res = await axios.post(API, expenseData);
    console.log(res);
    return res.data;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    handleSort: (state, action) => {
      state.filter.sortBy = action.payload;
    },
    handleFilter: (state, action) => {
      state.filter.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.expenses = action.payload.expenses;
    });
    builder.addCase(fetchExpenses.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    builder.addCase(addNewExpense.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addNewExpense.fulfilled, (state, action) => {
      state.isLoading = false;
      state.expenses = [...state.expenses, action.payload.expense];
    });
    builder.addCase(addNewExpense.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export const { handleFilter, handleSort } = expenseSlice.actions;

export const expenseReducer = expenseSlice.reducer;
