import {List, Map} from 'immutable';
import {LOGIN, ADD_TO_CART, SUBMIT_ORDER} from './action_creators.js';
import fetch from 'isomorphic-fetch'

function login(state, profile) {
    return Object.assign({}, state, {
        profile
    });
}

function addToCart(state, productId) {
    var newState = state.updateIn(['cart', productId], 0, count => count + 1);
    console.log(newState);
    return newState;
}

function submitOrder(state) {
    return fetch('http://127.0.0.1:8080/restaurant/order/', {method: 'post'}).then(function (response) {
        return state.delete('cart');
    }).catch(function (err) {
        console.log('something is wrong, but still delete cart');
        return state.delete('cart');
    })
}

const initialData = {products : [{
    id: 1,
    name: 'product1',
    imgUrl: ''
}, {
    id: 2,
    name: 'product2',
    imgUrl: ''
}, {
    id: 3,
    name: 'product3',
    imgUrl: ''
}]}


export default function (state = Map(initialData), action = {}) {
    switch (action.type) {
        case LOGIN:
            return login(state, action.profile);
        case ADD_TO_CART:
            return addToCart(state, action.productId);
        case SUBMIT_ORDER:
            return submitOrder(state);
    }
    return state;
}
