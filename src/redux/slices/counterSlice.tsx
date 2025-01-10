// src/redux/slices/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

interface CounterState {
  count: any;
}

const initialState: CounterState = {
  count: null,
};

console.log('Initial state:', initialState);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      console.log('Incremented count:', state.count);  // Debugging log
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
        console.log('Decremented count:', state.count);  // Debugging log
      }else{
        Alert.alert("Cart is Empty")
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
