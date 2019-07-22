import React from "react";
import ProductsListItem from "../productsListItem/productsListItem";
import { Container, Row } from 'react-bootstrap';

const ProductsList = (props) => {
    const productsToDisplay = props.products.map((product, index) => {
        return (
            <ProductsListItem product={product} key={index} addToCart={props.addToCart}/>
        );
    });

    return (
            <Container className="products-list" fluid={true} >
            <Row>
                {productsToDisplay}
            </Row>
            </Container>
    );
};

export default ProductsList;