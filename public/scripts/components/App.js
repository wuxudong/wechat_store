/**
 * Created by xudong on 4/25/16.
 */

import React from 'react'
import {ProductListContainer} from './ProductList'
import {connect} from 'react-redux';
import {submitOrder} from '../action_creators'

let App = React.createClass({
    render: function () {
        return <div>
            <ProductListContainer/>
            <button onClick={this.props.handleSubmitOrder}>submit</button>
        </div>
    }
})

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmitOrder: () => {
            dispatch(submitOrder())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
