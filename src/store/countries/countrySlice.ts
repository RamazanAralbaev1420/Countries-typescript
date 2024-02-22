import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries } from './country.action';
import { ICountries } from '../../tdata/Interface';

interface CounterState {
    countries: string[],
    isLoading: boolean
}

const initialState: CounterState = {
  countries: [],
  isLoading: false,
};

export const countrySlice = createSlice({
  name: 'contry',
  initialState,
  reducers: {
    fetchingTodos(state, action) {
      state.isLoading = true;
    },
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

export const { fetchingTodos } = countrySlice.actions;
export default countrySlice.reducer;
