import React from 'react';
import { View,Text, FlatList } from 'react-native';
import CheckoutItem from './common/CheckoutItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CheckoutHeader from './common/CheckoutHeader';
import ChekoutFooter from './common/ChekoutFooter';
export default
  function DetailsScreen() {
    const cartProducts = useSelector((state: RootState) => state.cart.productArray);
    console.log(cartProducts);
  return (
      <View style={{backgroundColor : '#FAF7F0', flex:1}}>
        <CheckoutHeader/>
        <FlatList
      data = {cartProducts}
      keyExtractor={item => item.productId}
      ListEmptyComponent={
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: '#999' }}>Your cart is empty</Text>
          </View>
      }
      renderItem={({item}) => {
                          return(
                        <CheckoutItem
                          name = {item.name}
                          price = {item.price}
                          image={item.image}
                          productId={item.productId}
                          quantity={item.quantity}
                          />
                          );
                      }}
                      contentContainerStyle = {{justifyContent:'flex-start', alignItems:'center', minHeight : '80%'}}

      />
      <ChekoutFooter />
      </View>
  );
}
