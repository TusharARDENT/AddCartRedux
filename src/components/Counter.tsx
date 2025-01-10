// src/Counter.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';
import { RootState, AppDispatch } from '../redux/store'; // Import the store types
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
const Counter: React.FC = () => {
  // Access the count value from the Redux store with useSelector
  const count = useSelector((state: RootState) => state.counter.count);
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default Counter;
