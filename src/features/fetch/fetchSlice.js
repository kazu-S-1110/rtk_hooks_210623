import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

const initialState = {
  photos: [],
};

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
});

export const fetchAsyncGet = createAsyncThunk('fetch/get', async () => {
  const res = await axios.get(apiUrl);
  return res.data;
});

export default fetchSlice.reducer;
