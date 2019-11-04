import React from 'react';
import { Provider } from 'react-redux'
import { creteStore } from 'redux'

import Routes from './Routes';

export default props => (
    <Provider store={creteStore(reducers)}>
        <Routes />
    </Provider>
);
