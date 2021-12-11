import { combineReducers } from '@reduxjs/toolkit';
import entities from './entities';
import auth from './slices/auth';
import cars from './slices/cars';
import addcars from './cars/cars';

const reducer = combineReducers({
  auth,
  cars,
  entities,
  addcars,
});

export default reducer;
