//Cart
const getAddedToCartProducts = (state) => {
    return state.cart.addedToCartProducts;
};

export const getCurrency = (state) => {
    return state.cart.currency;
};

export const getTotalCartValue = (state) => {
    return getAddedToCartProducts(state).reduce((previousValue, currentItem) => {
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
        const productInfo = getProducts(state).find(item => item.id === product.productId);;
        return {
            ...productInfo,
            totalPrice: product.quantity * productInfo.price,
            quantity: product.quantity
        };
    });
};

// Products
const getProducts = (state) => {
    return state.products;
};

// INFO
// mockupState = {
//     cart: {
//       addedToCartProducts: [
//         {
//           productId: 1,
//           quantity: 3
//         },
//         {
//           productId: 3,
//           quantity: 4
//         }
//       ],
//       currency: "zł"
//     }
//   };

// productId: productId,
// quantity: quantity