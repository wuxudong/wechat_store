/**
 * Created by xudong on 4/25/16.
 */

const LOGIN = 'LOGIN';

const ADD_TO_CART = 'ADD_TO_CART';

const SUBMIT_ORDER = 'SUBMIT_ORDER';


export function login(client) {
    return {
        type: LOGIN,
        client
    };
}


export function addToCart(productId) {
    return {
        type: ADD_TO_CART,
        productId
    };
}

export function submitOrder() {
    return {
        type: SUBMIT_ORDER
    };
}




