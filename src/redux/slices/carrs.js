/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const carrs = createSlice({
  name: 'carrs',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    carsRequested: (state) => {
      state.loading = true;
    },
    setCars: (state, action) => {
      state.list = action.payload.data;
      state.loading = false;
    },
    setCarsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },

});

export const { carsRequested, setCars, setCarsFailure } = carrs.actions;
export default carrs.reducer;
