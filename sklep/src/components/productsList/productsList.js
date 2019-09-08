import React from "react";
import ProductsListItem from "../productsListItem/productsListItem";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/actions";
import { getProducts } from "../../store/selectors/selectors";

const ProductsList = (props) => {
    const productsToDisplay = props.products.map((product, index) => {
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

const mapStateToProps = state => {
    return { products: getProducts(state) };
};

const mapDispatchToProps = {
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);