import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


const store = configureStore();

let jsx = (
    <Provider
        store={store}
    >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));