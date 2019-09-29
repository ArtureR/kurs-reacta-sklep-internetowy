import { products } from '../../products.json';
import { getAddedToCartProducts } from '../selectors/selectors';

const initialState = {
  cart: {
    addedToCartProducts: [],
    currency: "$"
  },
  sidebarOpen: false,
  products: products,
  order: {
    currentAddress: 1
  },
  user: {
    gender: "f",
    firstName: "Asia",
    lastName: "Czyżo",
    defaultAddress: 1,
    addressBook: [
      {
        id: 1,
        city: "Wrocław",
        region: "Dolnośląskie",
        postalCode: "53-533",
        street: "plac Grunwaldzki 1/11"
      },
      {
        id: 2,
        city: "Paris",
        region: "Paris",
        postalCode: "423-24243",
        street: "Elysiuum square 342f/43"
      }
    ]
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          addedToCartProducts: [],
        }
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