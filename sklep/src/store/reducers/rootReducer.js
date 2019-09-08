import { products } from '../../products.json';
import { getAddedToCartProducts } from '../selectors/selectors';

const initialState = {
  cart: {
    addedToCartProducts: [],
    currency: "zł"
  },
  sidebarOpen: false,
  products: products
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          addedToCartProducts: getAddedToCartProducts(state).filter(item => item.productId !== action.productId),
        }
      };
    case 'ADD_TO_CART':
      let newProductsInCart = [...getAddedToCartProducts(state)];
      const productInCart = newProductsInCart.find(item => item.productId === action.product.id);
      const isProductStillInCart = productInCart && (productInCart.quantity + action.product.quantity > 0);

      if (productInCart) {
        if (isProductStillInCart) {
          productInCart.quantity = productInCart.quantity + action.product.quantity;
        } else {
          newProductsInCart = newProductsInCart.filter(item => item.productId !== action.product.id);
        }
      } else {
        newProductsInCart.push({
          productId: action.product.id,
          quantity: action.product.quantity
        });
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          addedToCartProducts: newProductsInCart,
        }
      };
    default:
      return state;
  }
};

export default rootReducer;