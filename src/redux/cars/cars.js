const ADD_CAR = 'ADD_CAR';
const REMOVE_CAR = 'REMOVE_CAR';

export const addCar = (payload) => ({
  type: ADD_CAR,
  payload,
});

export const removeCar = (id) => ({
  type: REMOVE_CAR,
  id,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CAR:
      return [...state, ...action.payload];
    case REMOVE_CAR:
      return state.filter((car) => car.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
