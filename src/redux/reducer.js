import { combineReducers } from '@reduxjs/toolkit';
import auth from './slices/auth';
import cars from './slices/cars';

const reducer = combineReducers({
  auth, cars,
});

export default reducer;
