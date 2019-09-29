import React, { Component } from "react";
import adoppt from "../../assets/adoppt.svg";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { toggleSidebar } from "../../store/actions/actions";
import { getProductsInCart } from "../../store/selectors/selectors";
import { Button } from 'react-bootstrap';
import CartList from '../cartList/cartList';


class CartSidebar extends Component {
    constructor(props) {
        super(props);
        this.handleFinishOrder = this.handleFinishOrder.bind(this);
    }

    handleFinishOrder() {
        this.props.history.push("/order");
        this.props.toggleSidebar();
    };
    
    render() {
        const { productsInCart } = this.props;
        const isCartEmpty = productsInCart.length === 0;

        return (
            <div className="cart-sidebar">
                {isCartEmpty ? (
                    <h5 className="cart-sidebar-empty d-flex justify-content-center align-items-center flex-column">
                        <p>Your cart is empty!</p>
                        <img className="img-fluid" src={adoppt} alt="adoppt" />
                        <p>Find yourself a friend</p>
                    </h5>
                ) : (
                    <div>
                        <CartList />
                        <Button
                            variant="info"
                            className="pl-4 pr-4 mt-2"
                            onClick={() => this.handleFinishOrder()}
                        >Finish your order</Button>
                    </div>
                    )}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        productsInCart: getProductsInCart(state),
    };
}

const mapDispatchToProps = {
    toggleSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartSidebar));