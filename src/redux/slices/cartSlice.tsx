// src/redux/slices/cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

interface CounterState {
  count: any;
}

let productArray = [];

const initialState: CounterState = {
  count: null,
};

console.log('Initial state:', initialState);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.count += 1;
      console.log('Incremented count:', state.count);  // Debugging log
    },
    removeFromCart: (state) => {
      if (state.count > 0) {
        state.count -= 1;
        console.log('Decremented count:', state.count);  // Debugging log
      }else{
        Alert.alert("Cart is Empty")
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
