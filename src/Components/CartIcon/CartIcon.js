import React from "react";
import {connect} from 'react-redux'

import {selectCartItemsCount} from '../../Redux/cart/cart.selectors'
import {toggleCart} from '../../Redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";

import "./CartIcon.scss";

const CartIcon = ({toggleCart, itemCount}) => {
	return (
		<div className="cart-icon" onClick={toggleCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
