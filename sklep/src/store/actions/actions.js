import { ADD_TO_CART,TOGGLE_SIDEBAR } from "../constants/action-types";

export function addToCart(payload) {
  return { type: ADD_TO_CART, payload };
}

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });