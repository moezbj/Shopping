import { ADD_TO_CART, CHECKOUT, REMOVE_PRODUCT } from "../actions/types";

const INITIAL_STATE = {
  products: [
    {
      name: "Pepper",
      price: 3000,
      url: "capsicum"
    },
    {
      name: "Tomato",
      price: 2000,
      url: "tomato"
    },
    {
      name: "Onion",
      price: 1000,
      url: "onion"
    },
    {
      name: "Pumpkin",
      price: 1500,
      url: "pumpkin"
    },
    {
      name: "Carrot",
      price: 2000,
      url: "carrot"
    },
    {
      name: "Chou",
      price: 1000,
      url: "cabbage"
    },
    {
      name: "Pomme de terre",
      price: 3000,
      url: "potato"
    }
  ],
  myCart: [],
  total: 0
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      const myCart = state.myCart;

      myCart.push({ name: action.product.name, price: action.product.price });
      return {
        ...state,
        myCart,
        total: state.total + action.product.price
      };
    case CHECKOUT:
      return { ...state, myCart: [], total: 0 };
    case REMOVE_PRODUCT:
      console.log(action.item.index);
      const cart = state.myCart;
      const { price, index } = action.item;
      cart.splice(index, 1);
      return {
        ...state,
        cart,
        total: state.total - price
      };
    default:
      return state;
  }
};
