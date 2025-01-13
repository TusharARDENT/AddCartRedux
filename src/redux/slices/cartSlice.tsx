import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Product {
  productId: string;   
  name: string; 
  price: string; 
  quantity: number;
}

interface CartState {
  productArray: Product[];
}

const initialState: CartState = {
  productArray: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const newProduct = action.payload;
      const existingProduct = state.productArray.find(
        (product) => product.productId === newProduct.productId
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        console.log("Increased Quantity for product : ", newProduct);
      } else {
        state.productArray.push({ ...newProduct, quantity: 1 });
        console.log('Added new product to cart:', newProduct);
      }

      console.log(state.productArray);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const productIdToRemove = action.payload.productId;
      const existingProduct = state.productArray.find(
        (product) => product.productId === productIdToRemove
      );

      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          const index = state.productArray.indexOf(existingProduct);
          state.productArray.splice(index, 1);
        }
        console.log('Decreased quantity or removed product from cart:', action.payload);
      } else {
        Alert.alert('Product not found in the cart');
      }

      console.log(state.productArray);
    },

    clearCart : (state) => {
      state.productArray = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
