import React from "react";
import { Card } from 'react-bootstrap';
import AddToCart from '../addToCart/addToCart';

const ProductsListItem = (props) => {
    const { product } = props;

    return (
        <Card>
            <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/photo/${product.photo}`}
                alt={product.name}
                className="products-list-item-photo"
            />
            <Card.Body>
                <Card.Title className="products-list-item-title">{product.name}</Card.Title>
                <h6 className="products-list-item-price card-subtitle mb-2 text-muted">{product.price} zł</h6>
                <Card.Text className="products-list-item-description">{product.description}</Card.Text>
                <AddToCart productId={product.id} />
            </Card.Body>
        </Card>
    );
};

export default ProductsListItem;