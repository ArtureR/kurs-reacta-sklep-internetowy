import React from "react";
import ProductsListItem from "../productsListItem/productsListItem";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/actions";

const ProductsList = (props) => {
    const { products } = props;

    const productsToDisplay = products.map((product, index) => {
        return (
            <ProductsListItem product={product} key={index} addToCart={props.addToCart}/>
        );
    });

    return (
        <div className="products-list container-fluid">
            <div className="row">
                {productsToDisplay}
            </div>
        </div>
    );
};


const mapDispatchToProps = {
    addToCart
};

export default connect((state) => {return {};}, mapDispatchToProps)(ProductsList);