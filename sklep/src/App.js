import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import Header from './components/header/header';
import Content from './components/content/content';
import CartSidebar from './components/cartSidebar/cartSidebar';
import { products } from './products';
import { Navigation } from './components/navigation/navigation';
import Product from './components/product/product';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const removeDiacritics = require('diacritics').remove;
products.forEach(item => item.simpleName = removeDiacritics(item.name));

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
      sidebarOpen: false,
      products: products
    };

    this.initialState = {
      cart: {
        addedToCartProducts: [],
        currency: "zł"
      },
      sidebarOpen: false,
    };

    this.state = this.mockupState;
    // this.state = this.initialState;
    //this.state = this.initialState;

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

  handleSubmit = (product) => {
    const searchedProduct = removeDiacritics(product.toUpperCase());
    this.setState(() => ({
      products: products.filter((item) => item.simpleName.toUpperCase().includes(searchedProduct))
    }));
  }

  handleCategorySelect = (category) => {
    if (category === 'all') return this.setState(() => ({ products: products }));
    const searchedCategory = removeDiacritics(category.toUpperCase());
    this.setState(() => ({
      products: products.filter((item) => item.category.toUpperCase().includes(searchedCategory))
    }));
  }

  render() {
    const { cart, products } = this.state;

    return (
      <div className="App">
        <Router>
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
              },
            }}
          >
            <Header
              cart={cart}
              getProductById={this.getProductById}
              onSetSidebarOpen={this.onSetSidebarOpen} />
            <Navigation handleSubmit={this.handleSubmit} handleCategorySelect={this.handleCategorySelect}/>
              <Link to="/product">linkkkkkkkkkkkkkkkkkkkk</Link>
            <Route path="/product" render={() => <Product products={products} />}></Route>
            <Content products={products} addToCart={this.addToCart} />
          </Sidebar>
        </Router>
      </div>
    );
  }
}

export default App;
