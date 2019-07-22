import React, { Component } from "react";
import { Form, InputGroup, Button, Card, Col } from 'react-bootstrap';

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
        addToCart(product.id, this.state.quantity);
        this.setState({ quantity: 1 });
    }

    render() {
        const { product } = this.props;
        const { quantity } = this.state;

        return (
                <Col
                xs={12}
                sm={6}
                md={4}
                xl={3}
                className="products-list-item mb-4" 
                key={product.id}
            >
                <Card>
                    <Card.Img
                        variant="top"
                        src={product.photo}
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
                                            className="products-list-item-buy-btn pl-5 pr-5"
                                        >Kup</Button>
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
                </Col>
                   );
                }
            };
            
export default ProductsListItem;