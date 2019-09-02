import React from "react";
import { connect } from 'react-redux'


import "./CheckoutItem.scss";
import { clearItem, addItem, removeItem } from "../../Redux/cart/cart.action";

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
    const {name, quantity, price, imageUrl} = cartItem 
	return (
		<div className="checkout-item">
			<div className="image-container">
				<div className="image" style={{backgroundImage: `url(${imageUrl})`}} alt="item" />
			</div>
			<span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
