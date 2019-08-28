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
    return state;
};

export default rootReducer;