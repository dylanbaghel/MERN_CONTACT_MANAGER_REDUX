import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import contactReducer from './../reducers/contacts';
import filterReducer from './../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(combineReducers({
        contacts: contactReducer,
        filters: filterReducer
    }), composeEnhancers(
        applyMiddleware(thunk)
    ));

    return store;
};

export default configureStore;