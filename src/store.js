import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from "redux-logger";
import todoReducer from './reducers/todoReducer';

export default createStore( combineReducers({ Todo: todoReducer}), {}, applyMiddleware(createLogger()));