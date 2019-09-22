import React from "react";
import { Card, Button } from 'react-bootstrap';
import AddToCart from '../addToCart/addToCart';
import { Link } from 'react-router-dom';

const ProductsListItem = (props) => {
    const { product } = props;

    return (
        <Card>
            <Link to={`/product/${product.id}`}>
                <Card.Img
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/photo/${product.photo}`}
                    alt={product.name}
                    className="products-list-item-photo"
                />
            </Link>
            <Card.Body>
                <Card.Title className="products-list-item-title">{product.name}</Card.Title>
                <h6 className="products-list-item-price card-subtitle mb-2 text-muted">{product.price} zł</h6>
                <Card.Text className="products-list-item-description">{product.description}</Card.Text>
                <AddToCart productId={product.id} />
                <Button
                    variant="secondary"
                    as={Link}
                    to={`/product/${product.id}`}
                    className="pl-4 pr-4 mt-2"
                >Show more</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductsListItem;