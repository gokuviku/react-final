// reducer.js

const initialState = {
  items: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case "delete":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };
    case "edit":
      return {
        ...state,
        items: state.items.map((item, index) => 
          index === action.payload.index ? action.payload.newItem : item
        )
      };
    case "get":
      return {
        ...state,
        currentItem: state.items[action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
