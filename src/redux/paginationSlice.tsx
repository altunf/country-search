import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface PaginationState {
  value: [];
}

const initialState: PaginationState = {
  value: [],
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export const selectPagination = (state: RootState) => state.pagination.value;
export default paginationSlice.reducer;
