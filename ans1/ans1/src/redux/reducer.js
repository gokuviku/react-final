// Reducer.js
import { add, del, edit, get } from './action';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add:
      return [...state, action.payload];

    case del:
      return state.filter((_, index) => index !== action.payload);

    case edit:
      return state.map((item, index) =>
        index === action.payload.index ? action.payload.newItem : item
      );
    case get:
      return state.map((item, index) => null)
      
    default:
      return state;
  }
};

export default reducer;