
import { applyMiddleware, combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
// import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './reducer';
const rootReducer = combineReducers({
  postsReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));