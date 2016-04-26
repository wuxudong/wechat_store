import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {addToCart} from './action_creators.js';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import Immutable from 'immutable';
import App from './components/App';

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

const loggerMiddleware = createLogger()

const store = createStore(reducer, InitialData, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('app')
);
