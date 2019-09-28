import React from "react";
import ProductsListItem from "../productsListItem/productsListItem";
import { Container, Row, Col } from 'react-bootstrap';

const ProductsList = (props) => {
    const { products } = props;

    const productsToDisplay = products.map((product, index) => {
        return (
            <Col xs={12} sm={6} md={3}  className="products-list-item mb-4" key={product.id} >
                <ProductsListItem product={product} key={index} />
            </Col>
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