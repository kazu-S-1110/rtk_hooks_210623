import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export const fetchAsyncGet = createAsyncThunk('fetch/get', async () => {
  const res = await axios.get(apiUrl);
  return res.data;
});

const fetchSlice = createSlice({
  name: 'fetch',
  initialState: { photos: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        photos: action.payload,
      };
    });
  },
});

export const selectPhotos = (state) => state.fetch.photos;

export default fetchSlice.reducer;
