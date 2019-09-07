import { ADD_TO_CART,TOGGLE_SIDEBAR } from "../constants/action-types";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product: product
});

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });