import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import paginationReducer from "./paginationSlice";
import selectReducer from "./selectSlice";

export const store = configureStore({
  reducer: {
    filteredData: filterReducer,
    pagination: paginationReducer,
    selectedItem: selectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
