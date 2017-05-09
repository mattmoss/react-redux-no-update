import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import App from './App';
import { fetchChannels } from './actions/channelActions';

const store = configureStore();
store.dispatch(fetchChannels());

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);

