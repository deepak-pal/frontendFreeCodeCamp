import { ActionTypes } from "../constant/action-types"
export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setSelectedProduct = (product) => {
    return {
        type:ActionTypes.SELCTED_PRODUCT,
        payload: product
    }
}