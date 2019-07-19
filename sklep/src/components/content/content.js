import React from "react";
import ProductsList from '../productsList/productsList';

class Content extends React.Component {
    render() {
        const { products, addToCart } = this.props;
        const isSearchEmpty = products.length === 0;
        return (
            <div className="content">
                {isSearchEmpty ? (
                    <p>item not found</p>
                ) : (
                    <ProductsList products={products} addToCart={addToCart} />
                )}
            </div>
        );
    }
};

export default Content;