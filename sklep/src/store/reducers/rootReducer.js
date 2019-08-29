import { products } from '../../products.json';

const initialState = {
    cart: {
        addedToCartProducts: [],
        currency: "zł"
    },
    sidebarOpen: false,
    products: products
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'TOGGLE_SIDEBAR':
          return {
            ...state,
            sidebarOpen: !state.sidebarOpen
          };
        default:
          return state;
      }
};

export default rootReducer;