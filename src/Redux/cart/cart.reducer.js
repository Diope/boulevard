import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM } from "../actionTypes";
import { addItemToCart } from "./utils";


const initialState = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case TOGGLE_CART:
        return { ...state, hidden: !state.hidden }

    case ADD_ITEM:
        return {...state, cartItems: addItemToCart(state.cartItems, payload)}

    case REMOVE_ITEM:
        return {
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)
        }

    default:
        return state
    }
}
