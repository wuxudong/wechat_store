import {List, Map} from 'immutable';
import {ACTION_TYPE} from './action_creators.js';
import fetch from 'isomorphic-fetch'

function login(state, profile) {
    return state.set('profile', profile);
}

function addToCart(state, productId) {
    return state.updateIn(['cart', productId], 0, count => count + 1);
}

function submitOrder(state) {
    return state.set('cart', Map());
}



export default function (state, action = {}) {

    switch (action.type) {
        case ACTION_TYPE.LOGIN:
            return login(state, action.profile);
        case ACTION_TYPE.ADD_TO_CART:
            return addToCart(state, action.productId);
        case ACTION_TYPE.SUBMIT_ORDER:
            return submitOrder(state);
    }
    return state;
}
