import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiLink = 'https://ridefast.herokuapp.com/api/v1';

const initialState = {
  allCars: [],
};

export const fetchCarsDataAsync = createAsyncThunk(
  'cars/fetchAll',
  async () => {
    let carData = await fetch(`${apiLink}/cars`);
    carData = await carData.json();
    return carData.data;
  },
);

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsDataAsync.fulfilled, (state, action) => {
      const { allCars } = state;
      action.payload.forEach((car) => {
        allCars.push(car);
      });
    });
  },
});

export const carsSelector = (state) => state.cars.allCars;
export default carSlice.reducer;
