import React, { Component } from "react";
import InputGroup from "../common/inputGroup";

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
            <div className="col-3 products-list-item mb-4" key={product.id}>
                <div className="card">
                    <img className="products-list-item-photo card-img-top" src={product.photo} alt={product.name} />
                    <div className="card-body">
                        <h5 className="products-list-item-title card-title">{product.name}</h5>
                        <h6 className="products-list-item-price card-subtitle mb-2 text-muted">{product.price} zł</h6>
                        <p className="products-list-item-description card-text">{product.description}</p>
                        <div className="products-list-item-buy d-flex flex-column">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <InputGroup
                                        prepend={<button
                                            className="products-list-item-buy-btn btn btn-primary pl-5 pr-5"
                                            type="submit"
                                        >Kup
                                        </button>}
                                        input={<input
                                            type="number"
                                            value={quantity}
                                            min="1"
                                            onChange={this.handleChange}
                                            className="form-control text-center pr-0"
                                            id={`quantity-${product.id}`}
                                            placeholder="ilość"
                                        />}
                                        append={<span className="input-group-text">szt.</span>}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default ProductsListItem;