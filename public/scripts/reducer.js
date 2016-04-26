import {List, Map} from 'immutable';
import Immutable from 'immutable';
import {ACTION_TYPE} from './action_creators.js';
import fetch from 'isomorphic-fetch'

function login(state, profile) {
    return state.set('profile', profile);
}

function addToCart(state, productId) {
    return state.updateIn(['cart', productId], 0, count => count + 1);
}

function submitOrder(state) {
    return fetch('http://127.0.0.1:8080/restaurant/order/', {method: 'post'}).then(function (response) {
        return state.delete('cart');
    }).catch(function (err) {
        console.log('something is wrong, but still delete cart');
        return state.delete('cart');
    })
}

const InitialData = Immutable.fromJS({
    products: [{
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
    }],
    cart : {},
    profile : {}

});

export default function (state = InitialData, action) {
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
