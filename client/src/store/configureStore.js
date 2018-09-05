import { createStore, combineReducers, applyMiddleware } from 'redux';
import contactReducer from './../reducers/contacts';
import filterReducer from './../reducers/filters';
import thunk from 'redux-thunk';

const configureStore = () => {
    const store = createStore(combineReducers({
        contacts: contactReducer,
        filters: filterReducer
    }), applyMiddleware(thunk));

    return store;
};

export default configureStore;