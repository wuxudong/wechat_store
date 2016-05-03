/**
 * Created by xudong on 4/25/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../action_creators.js'
const ProductItem = React.createClass({
    handleClick: function () {
        this.props.handleClick(this.props.product.get('id'));
    },

    render: function () {
        return <div onClick={this.handleClick}>
            <span>{this.props.product.get('name')}</span>
        </div>
    }


})

const ProductList = React.createClass({

    count: function (cart, productId) {
        return cart.get(productId) ? cart.get(productId) : 0;
    },

    render: function () {
        var list = this.props.products.map(entry =>
                <div key={entry.get('id')}>
                    <ProductItem  product={entry} handleClick={this.props.addToCart}/>
                    <span>{this.count(this.props.cart, entry.get('id'))}</span>
                </div>
        );

        return <div>{list}</div>
    }
})

function mapStateToProps(state) {
    return {
        products: state.get('products'),
        cart : state.get('cart')

    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export const ProductListContainer = connect(
    mapStateToProps, mapDispatchToProps)(ProductList);
