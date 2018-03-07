import { ADD_TO_CART, CHECKOUT } from "./types";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function checkOut(product) {
  return {
    type: CHECKOUT,
    product
  };
}
