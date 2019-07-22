import React, { Component } from "react";
import { Container, Row, ListGroup } from 'react-bootstrap';
import "./cartSidebarList.scss";

class CartSidebarList extends Component {
    render() {
        const { cart, getProductById, removeFromCart, addToCart } = this.props;
        const productsToDisplay = cart.addedToCartProducts.map((product) => {
            const productInfo = getProductById(product.productId);
            const totalProductValue = `${product.quantity * productInfo.price}${cart.currency}`;
            const productValue = `${productInfo.price}${cart.currency}/szt.`;
            return (
                <ListGroup.Item className="cart-sidebar-list-item" key={product.productId}>
                    <div className="cart-sidebar-list-item-description d-flex flex-column">
                        <h6 className="cart-sidebar-list-item-name mb-1">{productInfo.name}</h6>
                        <p className="cart-sidebar-list-item-price mb-1">{productValue}</p>
                    </div>
                    <p className="cart-sidebar-list-item-quantity mb-1">
                        <button
                            className="cart-sidebar-list-item-quantity-less btn mr-1"
                            onClick={() => addToCart(product.productId, -1)}
                        >-</button>
                        <span>{product.quantity}</span>
                        <button
                            className="cart-sidebar-list-item-quantity-more btn ml-1"
                            onClick={() => addToCart(product.productId, 1)}
                        >+</button>
                    </p>
                    <p className="cart-sidebar-list-item-value mb-1">{totalProductValue}</p>
                    <button
                        className="cart-sidebar-list-item-remove btn"
                        onClick={() => removeFromCart(product.productId)}
                    ></button>
                </ListGroup.Item>
            );
        });

        return (
            <Container fluid>
                <Row>
                    <ListGroup className="cart-sidebar-list">
                        <ListGroup.Item className="cart-sidebar-list-item cart-sidebar-list-item_header">
                            <div className="cart-sidebar-list-item-description d-flex flex-column">
                                <h6 className="cart-sidebar-list-item-name mb-1">Nazwa</h6>
                            </div>
                            <p className="cart-sidebar-list-item-quantity mb-1">Ilość</p>
                            <p className="cart-sidebar-list-item-value mb-1">Cena</p>
                            <p className="mb-1">Usuń</p>
                        </ListGroup.Item>
                        {productsToDisplay}
                    </ListGroup>
                </Row>
            </Container>
        );
    }
};

export default CartSidebarList;