/**
 * Created by xudong on 4/25/16.
 */
import fetch from 'isomorphic-fetch'


export const ACTION_TYPE = {
    LOGIN: 'LOGIN', ADD_TO_CART: 'ADD_TO_CART', SUBMIT_ORDER: 'SUBMIT_ORDER'
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
    //return fetch('http://127.0.0.1:9090/restaurant/order/', {method: 'post'}).then(function (response) {
    return dispatch => {
        return fetch('http://127.0.0.1:9090').then(function (response) {
            dispatch({
                type: ACTION_TYPE.SUBMIT_ORDER
            });
        }).catch(function (err) {
            console.log('something is wrong, ');
            console.log(err)
        })
    }
}




