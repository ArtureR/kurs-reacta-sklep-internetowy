import {
  ADD_TO_CART,
  TOGGLE_SIDEBAR,
  REMOVE_FROM_CART
} from "../constants/action-types";

export const addToCartAction = (product) => ({
  type: ADD_TO_CART,
  product: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  productId: productId
});

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });