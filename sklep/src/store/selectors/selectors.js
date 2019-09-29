//Cart
export const getAddedToCartProducts = (state) => {
    return state.cart.addedToCartProducts;
};

export const getCurrency = (state) => {
    return state.cart.currency;
};

export const getTotalCartValue = (state) => {
    return getProductsInCart(state).reduce((previousValue, currentItem) => {
        return previousValue + currentItem.totalPrice;
    }, 0);
};

export const getTotalCartQuantity = (state) => {
    return getAddedToCartProducts(state).reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
    }, 0);
};

export const getProductsInCart = (state) => {
    return getAddedToCartProducts(state).map((product) => {
        const productInfo = getProducts(state).find(item => item.id === product.productId);
        return {
            ...productInfo,
            totalPrice: product.quantity * productInfo.price,
            quantity: product.quantity
        };
    });
};

// Products
export const getProducts = (state) => {
    return state.products;
};

export const getPromotedProducts = (state) => {
    return state.products.filter(p => p.promoted);
};

// User
export const getUserData = (state) => {
    const { gender, firstName, lastName} = state.user;
    return {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
    };
};

export const getAddressBook = (state) => {
    return state.user.addressBook;
};

export const getDefaultAddress = (state) => {
    return state.user.defaultAddress;
};

// Order
// export const getCurrentAddress = (state) => {
//     return state.order.currentAddress;
// };