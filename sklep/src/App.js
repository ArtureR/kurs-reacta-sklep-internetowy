import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Sidebar from "react-sidebar";
import Header from './components/header/header';
import Content from './components/content/content';
import CartSidebar from './components/cartSidebar/cartSidebar';
import { connect } from "react-redux";
import { toggleSidebar } from "./store/actions/actions";
import About from './components/about/about';
import Category from './components/category/category';
import Product from './components/product/product';
import SearchResults from './components/searchResults/searchResults';

class App extends Component {
  render() {
    const { sidebarOpen, toggleSidebar } = this.props;

    return (
      <Router>
        <div className="App">
          <Sidebar
            sidebar={<CartSidebar />}
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
            <Route path="/about" component={About} />
            <Route path="/category" component={Category} />
            <Route path="/product" component={Product} />
            <Route path="/search" component={SearchResults} />
            <Route
              exact
              path="/"
              render={props => <Content {...props} />}
            />
          </Sidebar>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  toggleSidebar
};

const mapStateToProps = (state) => {
  return { sidebarOpen: state.sidebarOpen };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
