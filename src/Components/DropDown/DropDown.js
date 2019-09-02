import React from "react";

import Button from "../Button/Button";
import CartItem from '../CartItem/CartItem'
import { connect } from 'react-redux'
import {selectCartItems} from '../../Redux/cart/cart.selectors'
import { createStructuredSelector } from "reselect";

import "./DropDown.scss";

const DropDown = ({cartItems}) => {
	return (
		<div className="drop-down">
			<div className="cartItems">
			{
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
			}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default connect(mapStateToProps)(DropDown);
