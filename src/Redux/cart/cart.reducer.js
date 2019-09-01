import { TOGGLE_CART } from "../actionTypes";

const initialState = {
    hidden: true

}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case TOGGLE_CART:
        return { ...state, hidden: !state.hidden }

    default:
        return state
    }
}
