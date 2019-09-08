import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import Header from './components/header/header';
import Content from './components/content/content';
import CartSidebar from './components/cartSidebar/cartSidebar';
import { connect } from "react-redux";
import { toggleSidebar } from "./store/actions/actions";

class App extends Component {
  render() {
    const { sidebarOpen, toggleSidebar } = this.props;

    return (
      <div className="App">
        <Sidebar
          sidebar={<CartSidebar/>}
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
