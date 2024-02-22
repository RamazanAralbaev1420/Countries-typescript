import { ICountries } from './../../tdata/Interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCountries = createAsyncThunk(
  'fetchAllCountries',
  async (payload, thunkAPI) => {
    
      try {
        const response = await axios.get<ICountries[]>(
          'https://jsonplaceholder.typicode.com/posts'
        );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    
  }
);
