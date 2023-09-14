import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface SelectedItemState {
  value: string;
}

const initialState: SelectedItemState = {
  value: "",
};

export const selectSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedItem } = selectSlice.actions;
export const SelectedItem = (state: RootState) => state.selectedItem.value;
export default selectSlice.reducer;
