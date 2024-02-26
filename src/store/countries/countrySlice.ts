import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries } from './country.action';
import { ICountries } from '../../tdata/Interface';

interface CounterState {
    countries: ICountries[],
    isLoading: boolean
    selectValue: string
}

const initialState: CounterState = {
  countries: [],
  isLoading: false,
  selectValue: 'all'
};

export const countrySlice = createSlice({
  name: 'contry',
  initialState,
  reducers: {
    fetchingTodos(state, action:PayloadAction<string>) {
      state.isLoading = true;
    },

    addSelect(state, action) {
      state.selectValue = action.payload
    },

    isLoading(state, action) {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.countries = [];
      });
  },
});

export const { fetchingTodos, addSelect, isLoading } = countrySlice.actions;
export default countrySlice.reducer;
