
import React, { Component } from 'react';
import Sidebar from "react-sidebar";
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
      sidebarOpen: false
    };

    this.initialState = {
      cart: {
        addedToCartProducts: [],
        currency: "zł"
      },
      sidebarOpen: false
    };

    // this.state = this.mockupState;
    this.state = this.initialState;

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
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
        <Sidebar
          sidebar={<b>Sidebar content asd asdasdasdasd</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={true}
          shadow={false}
          overlayClassName={"sidebar-overlay"}
          styles={{
            sidebar: {
              background: "white",
              top: "62px",
            },
            overlay: { background: "rgba(0, 0, 0, 0.0)" },
          }}
        >
          <Header cart={cart} getProductById={this.getProductById} onSetSidebarOpen={this.onSetSidebarOpen} />
          <Content products={products} addToCart={this.addToCart} />
        </Sidebar>

      </div>
    );
  }
}

export default App;
