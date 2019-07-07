import React, { Component } from 'react';
import Header from './components/header/header';

import Content from './components/content/content';
import { products } from './products';

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      cart: {
        addedToCartProducts: [
          {
            productId: 1,
            quantity: 2
          },
          {
            productId: 3,
            quantity: 4
          }
        ],
        computedTotalCartQuantity: 6,
        computedTotalCartValue: 1450,
        currency: "zł"
      },
      user: {
        name: "Asia",
        surname: "Czyżo"
      }
    };

    this.state = this.initialState;
  }

  render() {
    const { cart } = this.state;

    return (
      <div className="App">
        <Header cart={cart} />
        <Content products={products} />
      </div>
    );
  }
}

export default App;
