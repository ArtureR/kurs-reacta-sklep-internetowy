import React, { Component } from "react";
import { Form, InputGroup, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { addToCartAction } from "../../store/actions/actions";

class addToCart extends Component {
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
        const { productId, addToCart } = this.props;

        event.preventDefault();
        addToCart({
            id: productId,
            quantity: this.state.quantity
        });
        this.setState({ quantity: 1 });
    }

    render() {
        const { productId } = this.props;
        const { quantity } = this.state;

        return (
            <Form onSubmit={this.handleSubmit} className="add-to-cart">
                <InputGroup>
                    <InputGroup.Prepend>
                        <Button
                            variant="primary"
                            type="submit"
                            className="add-to-cart-btn pl-4 pr-4"
                        >Buy</Button>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="number"
                        value={quantity}
                        min="1"
                        onChange={this.handleChange}
                        className="form-control text-center pr-0"
                        id={`quantity-${productId}`}
                        placeholder="ilość"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>szt.</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
};


const mapDispatchToProps = {
    addToCart: addToCartAction
};

export default connect((state) => { return {}; }, mapDispatchToProps)(addToCart);