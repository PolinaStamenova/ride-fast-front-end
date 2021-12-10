import { combineReducers } from '@reduxjs/toolkit';
import auth from './slices/auth';
import cars from './cars/cars';

const reducer = combineReducers({
  auth,
  cars,
});

export default reducer;
