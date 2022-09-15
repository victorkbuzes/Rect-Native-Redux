
import { applyMiddleware, combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import PostsSlice from './postSlice'



// const rootReducer = combineReducers({
//   PostsSlice
  
// });
export const store = configureStore({
  reducer : {
    PostsSlice
  }

})