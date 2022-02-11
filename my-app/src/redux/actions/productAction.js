import { ActionTypes } from "../constant/action-type"
export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type:ActionTypes.SELCTED_PRODUCT,
        payload: product
    }
}