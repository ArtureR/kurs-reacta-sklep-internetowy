import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import Header from './components/header/header';
import Content from './components/content/content';
import CartSidebar from './components/cartSidebar/cartSidebar';
import { connect } from "react-redux";
import { toggleSidebar } from "./store/actions/actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      cart: {
        addedToCartProducts: [],
        currency: "zł"
      }
    };

    this.state = this.initialState;
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

  render() {
    const { sidebarOpen, toggleSidebar } = this.props;

    return (
      <div className="App">
        <Sidebar
          sidebar={<CartSidebar
            removeFromCart={this.removeFromCart}
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
          <Header />
          <Content />
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
