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
    case 'ADD_TO_CART':
      let newProductsInCart = [...getAddedToCartProducts(state)];
      const productInCartIndex = newProductsInCart.findIndex(item => item.productId === action.product.id);
      const productInCart = productInCartIndex >= 0 ? newProductsInCart[productInCartIndex] : false;
      const isProductStillInCart = productInCart && (productInCart.quantity + action.product.quantity > 0);

      if (productInCart) {
        if (isProductStillInCart) {
          newProductsInCart[productInCartIndex].quantity = productInCart.quantity + action.product.quantity;
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