import { ADD_TO_CART, CHECKOUT } from "../actions/types";

const INITIAL_STATE = {
  products: [
    {
      name: "felfel",
      price: 3000
    },
    {
      name: "tmatem",
      price: 2000
    },
    {
      name: "bsal",
      price: 1000
    },
    {
      name: "9ra3",
      price: 1500
    },
    {
      name: "sfeneriya",
      price: 2000
    },
    {
      name: "kromb",
      price: 1000
    },
    {
      name: "batata",
      price: 3000
    },
    {
      name: "homs",
      price: 2000
    }
  ],
  myCart: [],
  total: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const myCart = state.myCart;
      myCart.push(action.product.item.name);
      return {
        ...state,
        myCart,
        total: state.total + action.product.item.price
      };
    case CHECKOUT:
      return { ...state, myCart: [], total: 0 };
    default:
      return state;
  }
};
