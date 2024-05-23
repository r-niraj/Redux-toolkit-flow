import { configureStore } from "@reduxjs/toolkit";
import countReducer from './counterSlice'
import logger from 'redux-logger';

const store= configureStore({
    reducer:{counter:countReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})


export default store;