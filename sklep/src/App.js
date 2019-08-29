import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import Header from './components/header/header';
import Content from './components/content/content';
import CartSidebar from './components/cartSidebar/cartSidebar';
import { products } from './products';
import { connect } from "react-redux";
import { toggleSidebar } from "./store/actions/actions";

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
    const { sidebarOpen, toggleSidebar } = this.props;

    return (
      <div className="App">
        <Sidebar
          sidebar={<CartSidebar
            cart={cart}
            getProductById={this.getProductById}
            removeFromCart={this.removeFromCart}
            addToCart={this.addToCart}
          />}
          open={sidebarOpen}
          onSetOpen={() => toggleSidebar()}
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
          />
          <Content addToCart={this.addToCart} />
        </Sidebar>
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleSidebar
};

const mapStateToProps = state => {
  return { sidebarOpen: state.sidebarOpen };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
