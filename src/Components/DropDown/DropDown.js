import React from "react";

import Button from "../Button/Button";
import { connect } from 'react-redux'
import {selectCartItems} from '../../Redux/cart/cart.selectors'

import "./DropDown.scss";
import CartItem from '../CartItem/CartItem'

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

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(DropDown);
