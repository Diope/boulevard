import { TOGGLE_CART, ADD_ITEM } from "../actionTypes";

const initialState = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case TOGGLE_CART:
        return { ...state, hidden: !state.hidden }

    case ADD_ITEM:
        return {...state, cartItems: [...state.cartItems, payload]}

    default:
        return state
    }
}
