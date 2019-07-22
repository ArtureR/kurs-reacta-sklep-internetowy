import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import Header from './components/header/header';
import Content from './components/content/content';
import CartSidebar from './components/cartSidebar/cartSidebar';
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

    this.state = this.mockupState;
    // this.state = this.initialState;

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  getProductById(productId) {
    return products.find(item => item.id === productId);
  }

  setProductsInCart = (newProductsInCart) => {
    this.setState(prevState => ({
      ...prevState,
      cart: {
        ...prevState.cart,
        addedToCartProducts: newProductsInCart,
      }
    }));
  }

  removeFromCart = (productId) => {
    const newProductsInCart = this.state.cart.addedToCartProducts.filter(item => item.productId !== productId);
    this.setProductsInCart(newProductsInCart);
  }


  addToCart = (productId, quantity) => {
    let newProductsInCart = [...this.state.cart.addedToCartProducts];
    const productInCartIndex = newProductsInCart.findIndex(item => item.productId === productId);
    const productInCart = productInCartIndex >= 0 ? newProductsInCart[productInCartIndex] : false;
    const isProductStillInCart = productInCart && (productInCart.quantity + quantity > 0);

    if (productInCart) {
      if (isProductStillInCart) {
        newProductsInCart[productInCartIndex].quantity = productInCart.quantity + quantity;
      } else {
        newProductsInCart = newProductsInCart.filter(item => item.productId !== productId);
      }
    } else {
      newProductsInCart.push({
        productId: productId,
        quantity: quantity
      });
    }

    this.setProductsInCart(newProductsInCart);
  }

  render() {
    const { cart } = this.state;

    return (
      <div className="App">
        <Sidebar
          sidebar={<CartSidebar
            cart={cart}
            getProductById={this.getProductById}
            removeFromCart={this.removeFromCart}
            addToCart={this.addToCart}
          />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={true}
          shadow={true}
          overlayClassName={"sidebar-overlay"}
          // use this style in case of toggle sidebar shadow
          // overlay: { background: "rgba(0, 0, 0, 0.0)" },
          styles={{
            sidebar: {
              background: "white",
              top: "62px",
              zIndex: 3
            },
          }}
        >
          <Header
            cart={cart}
            getProductById={this.getProductById}
            onSetSidebarOpen={this.onSetSidebarOpen} />
          <Content products={products} addToCart={this.addToCart} />
        </Sidebar>

      </div>
    );
  }
}

export default App;
