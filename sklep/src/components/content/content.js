import React from "react";
import ProductsList from '../productsList/productsList';
import "./content.scss";

class Content extends React.Component {
    render() {
        const { products, addToCart, selectedAnimal } = this.props;
        const isSearchEmpty = products.length === 0;
        return (
            <div className="content">
                {isSearchEmpty ? (
                    <div className="item-not-found-content">
                        <figure className="item-not-found-pic"/>
                        <h1>Item not found</h1>
                    </div>
                ) : (
                    <ProductsList products={products} addToCart={addToCart} selectedAnimal={selectedAnimal}/>
                )}
            </div>
        );
    }
};

export default Content;