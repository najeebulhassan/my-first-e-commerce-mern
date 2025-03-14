import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetail: productDetailsReducer,
  }, // Add your reducers here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
