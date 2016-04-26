/**
 * Created by xudong on 4/25/16.
 */

import React from 'react';
import {connect} from 'react-redux';

const ProductItem = React.createClass({
    handleClick: function () {
        this.props.handleClick(this.props.product.id);
    },

    render: function () {
        return <div onClick={this.handleClick}>
            <span>{this.props.product.name}</span>
        </div>
    }


})

const ProductList = React.createClass({

    render: function () {
        var list = this.props.products.map(entry => <ProductItem key={entry.id} product={entry} handleClick={this.props.handleAddToCartClick}/>);

        return <div>{list}</div>
    }
})

function mapStateToProps(state) {
    return {
        products: state.get('products')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddToCartClick: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export const ProductListContainer = connect(
    mapStateToProps, mapDispatchToProps)(ProductList);
