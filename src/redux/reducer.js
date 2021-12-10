import { combineReducers } from '@reduxjs/toolkit';
import auth from './slices/auth';
import cars from './slices/cars';
import addcars from './cars/cars';

const reducer = combineReducers({
  auth,
  cars,
  addcars,
});

export default reducer;
