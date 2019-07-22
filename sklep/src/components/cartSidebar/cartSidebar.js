import React, { Component } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import CartSidebarList from "../cartSidebarList/cartSidebarList";
import "./cartSidebar.scss";
import adoppt from "../../assets/adoppt.svg";

class CartSidebar extends Component {
    render() {
        const { cart, getProductById, removeFromCart, addToCart } = this.props;
        const isCartEmpty = cart.addedToCartProducts.length === 0;
        
        return (
            <Container className="cart-sidebar" fluid={isCartEmpty}>
                {isCartEmpty ? (
                    <Row className="cart-sidebar-empty">
                        <Col className="cart-sidebar-empty-content">
                            <h5>Twój koszyk jest pusty!</h5>
                            <Image src={adoppt} fluid alt="adoppt" />
                            <p>Przygarnij przyjaciela</p>
                        </Col>
                    </Row>
                ) : (
                    <Row>
                        <CartSidebarList
                            cart={cart}
                            getProductById={getProductById}
                            removeFromCart={removeFromCart}
                            addToCart={addToCart}
                        ></CartSidebarList>
                    </Row>
                )}
            </Container>
        );
    }
};

export default CartSidebar;