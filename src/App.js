import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './Router/Route'; //路由配置
import store from './Redux/Store/Store';
import './Config/Config';//引入默认配置

import './Style/common';
import './Style/head';
import './Style/index';
import './Style/chooseProducts';
import './Style/helpCenter';
import './Style/saleRecord';
import './Style/allDeposit';
import './Style/applyDeposit';
import './Style/applyRecord';


store.subscribe(() => { //监听state变化
    console.log(store.getState())
});

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('app')
    // document.body.appendChild(document.createElement('div'))
);