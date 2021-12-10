const ADD_CAR = 'ADD_CAR';

export const addCar = (payload) => ({
  type: ADD_CAR,
  payload,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CAR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
