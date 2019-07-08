import React, { Component } from 'react';
import Header from './components/header/header';

import Content from './components/content/content';
import { products } from './products';

class App extends Component {
  constructor(props) {
    super(props);

    this.mockupState = {
      cart: {
        addedToCartProducts: [
          {
            productId: 1,
            quantity: 3
          },
          {
            productId: 3,
            quantity: 4
          }
        ],
        currency: "zł"
      },
      user: {
        name: "Asia",
        surname: "Czyżo"
      }
    };

    this.initialState = {
      cart: {
        addedToCartProducts: [],
        currency: "zł"
      }
    };

    // this.state = this.mockupState;
    this.state = this.initialState;
  }

  getProductById(productId) {
    return products.find(item => item.id === productId);
  }


  addToCart = (productId, quantity) => {
    const newProductsInCart = [...this.state.cart.addedToCartProducts];
    const productInCartIndex = newProductsInCart.findIndex(item => item.productId === productId);
    if (productInCartIndex >= 0) {
      newProductsInCart[productInCartIndex].quantity++;
    } else {
      newProductsInCart.push({
        productId: productId,
        quantity: quantity
      });
    }

    this.setState(prevState => ({
      ...prevState,
      cart: {
        ...prevState.cart,
        addedToCartProducts: newProductsInCart,
      }
    }));
  }

  render() {
    const { cart } = this.state;

    return (
      <div className="App">
        <Header cart={cart} getProductById={this.getProductById} />
        <Content products={products} addToCart={this.addToCart} />
      </div>
    );
  }
}

export default App;
