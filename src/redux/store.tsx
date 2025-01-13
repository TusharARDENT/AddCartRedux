// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'; // Import counter reducer
import cartReducer from './slices/cartSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use counter reducer to manage state
    cart: cartReducer,
  },
});

// Types for the root state and app dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
