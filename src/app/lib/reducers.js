import { actions } from "./actions";
const {
  ADD_TO_CART,
  SAVE_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} = actions;

const saveToLocalstorage = (object) => {
  localStorage.setItem("items", JSON.stringify(object));
}; //We need to transform the object as a string

const initialState = {
  //We gather what we have in our localStorage to pass it to the initial state
  items:
    JSON.parse(localStorage.getItem("items")) !== null
      ? JSON.parse(localStorage.getItem("items"))
      : [],
  total: 0,
};

export default function onlineStoreApp(state = initialState, actions) {
  switch (actions.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        items: [...state.items, actions.payload],
      });

    case UPDATE_CART:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          return item.id === actions.payload.id
            ? Object.assign({}, item, {
                quantity: actions.payload.quantity,
              })
            : item;
        }),
      });

    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        items: state.items.filter((item) => {
          return item.id !== actions.payload;
        }),
      });

    case SAVE_CART:
      saveToLocalstorage(actions.payload.items);
      return Object.assign({}, state, { items: actions.payload.items });

    case RESET_CART:
      saveToLocalstorage([]);
      return Object.assign({}, state, {
        items: [],
      });

    default:
      return state;
  }
}
