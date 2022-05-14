import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { addPostReducer } from './reducers/post';

const reducers = combineReducers({
    addPost: addPostReducer,
});

const initialState = {};

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;