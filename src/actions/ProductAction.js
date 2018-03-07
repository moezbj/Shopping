import { ADD_TO_CART, CHECKOUT, REMOVE_PRODUCT } from "./types";

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
export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    id
  };
}
