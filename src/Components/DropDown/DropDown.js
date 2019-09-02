import React from "react";
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import Button from "../Button/Button";
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../Redux/cart/cart.selectors'
import {toggleCart} from '../../Redux/cart/cart.action'
import { createStructuredSelector } from "reselect";


import "./DropDown.scss";

const DropDown = ({cartItems, history, dispatch}) => {
	return (
		<div className="drop-down">
			<div className="cartItems">
			{	
				cartItems.length ?
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
				<span className="empty-message">Your cart is currently empty</span>
			}
			</div>
			<Button onClick={() => {
				history.push('/checkout');
				dispatch(toggleCart());
			}}>GO TO CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(DropDown));
