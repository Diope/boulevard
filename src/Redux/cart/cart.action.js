import { TOGGLE_CART, ADD_ITEM } from "../actionTypes";

export const toggleCart = () => ({
    type: TOGGLE_CART
})

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})