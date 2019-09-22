import React, { Component } from "react";
import { Form, InputGroup, Button, Card } from 'react-bootstrap';

class ProductsListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        let quantity = parseInt(event.target.value, 10);
        quantity = quantity > 0 ? quantity : 1;
        this.setState({ quantity: quantity });
    }

    handleSubmit(event) {
        const { product, addToCart } = this.props;

        event.preventDefault();
        addToCart({
            id: product.id,
            quantity: this.state.quantity
        });
        this.setState({ quantity: 1 });
    }

    render() {
        const { product } = this.props;
        const { quantity } = this.state;

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
                    <div className="products-list-item-buy d-flex flex-column">
                        <Form onSubmit={this.handleSubmit}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="products-list-item-buy-btn pl-4 pr-4"
                                    >Buy</Button>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    onChange={this.handleChange}
                                    className="form-control text-center pr-0"
                                    id={`quantity-${product.id}`}
                                    placeholder="ilość"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>szt.</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        );
    }
};


export default ProductsListItem;