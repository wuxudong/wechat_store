/**
 * Created by xudong on 4/25/16.
 */



export const ACTION_TYPE = {
    LOGIN : 'LOGIN', ADD_TO_CART: 'ADD_TO_CART', SUBMIT_ORDER:'SUBMIT_ORDER'
}

export function login(client) {
    return {
        type: ACTION_TYPE.LOGIN,
        client
    };
}


export function addToCart(productId) {
    return {
        type: ACTION_TYPE.ADD_TO_CART,
        productId
    };
}

export function submitOrder() {
    return {
        type: ACTION_TYPE.SUBMIT_ORDER
    };
}




