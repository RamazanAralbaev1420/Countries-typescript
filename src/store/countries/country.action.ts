import { ICountries } from './../../tdata/Interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useAppSelector } from '../hooks';
import { useSelector } from 'react-redux';

export const fetchAllCountries = createAsyncThunk(
  'fetchAllCountries',
  async (val: string, thunkAPI) => {
    try {
      const response = await axios.get<ICountries[]>(
        `https://restcountries.com/v3.1/${
          val === 'All' ? 'all' : `region/${val}`
        }`
      );
      if (response) {
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
