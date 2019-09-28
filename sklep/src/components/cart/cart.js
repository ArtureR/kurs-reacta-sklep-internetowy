import React, { Component } from "react";
// import "./cart.scss";
import { connect } from "react-redux";
import { toggleSidebar } from "../../store/actions/actions";
import {
    getTotalCartValue,
    getTotalCartQuantity,
    getCurrency
} from "../../store/selectors/selectors";

class Cart extends Component {
    render() {
        const {
            totalCartValue,
            totalCartQuantity,
            currency,
            toggleSidebar,
        } = this.props;
        const displayedCartValue = `${totalCartValue}${currency}`;

        return (
            <div className="cart form-inline">
                <button
                    className="cart-btn btn"
                    onClick={() => toggleSidebar()}
                >
                    {displayedCartValue}
                </button>
                <div className="cart-quantity">{totalCartQuantity}</div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        totalCartValue: getTotalCartValue(state),
        totalCartQuantity: getTotalCartQuantity(state),
        currency: getCurrency(state)
    };
}

const mapDispatchToProps = {
    toggleSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);