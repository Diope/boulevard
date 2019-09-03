import SHOP_DATA from "../../Views/Shopping/data";

const initialState = {
    collections: SHOP_DATA
}

export const shopReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    default:
        return state
    }
}
