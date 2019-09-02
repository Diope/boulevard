import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

export const toggleCart = () => ({
    type: TOGGLE_CART
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item
})