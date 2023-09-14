import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Countries } from "@/types/types";
import { RootState } from "./store";
import { toast } from "react-toastify";

export interface FilterState {
  value: [];
}

const initialState: FilterState = {
  value: [],
};

export const filterSlice = createSlice({
  name: "filteredData",
  initialState,
  reducers: {
    searchDataFilter: (state, action: PayloadAction<any>) => {
      const { filterText, data } = action.payload;

      //splitting input value
      const splittingText = filterText.split(" ");

      const search: string = splittingText.find((filter: string) =>
        filter.startsWith("search:")
      );
      const group: string = splittingText.find((filter: string) =>
        filter.startsWith("group:")
      );

      // search values and group values
      const searchText = search ? search.split(":")[1] : "";
      const groupField = group ? group.split(":")[1] : "";

      // Filter the data
      const searchedResults = data?.countries.filter((country: Countries) =>
        country.name.toLowerCase().includes(searchText.toLowerCase())
      );

      // Group the filtered results by the specified field
      const groupedResults = searchedResults.filter((el: Countries) =>
        el.continent.name.toLowerCase().includes(groupField.toLowerCase())
      );
      console.log(groupedResults, searchedResults);
      if (searchedResults?.length > 0) {
        if (groupedResults?.length > 0) {
          state.value = groupedResults;
        } else if (groupField == "") {
          state.value = searchedResults;
        } else {
          toast("Not Found Data To Group Criteria");
        }
      } else {
        toast("Not Found Data To Search Criteria");
      }
    },
  },
});

export const { searchDataFilter } = filterSlice.actions;
export const selectFilteredData = (state: RootState) =>
  state.filteredData.value;
export default filterSlice.reducer;
