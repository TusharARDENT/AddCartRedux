import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Button } from '@react-navigation/elements';
import Card from './common/Card';
import { Data } from './data/data';

export default function HomeScreen() {
  return (
    <FlatList
      data={Data}
      keyExtractor={(item) => item.productId.toString()} 
      renderItem={({ item }) => (
        <Card name={item.name} price={item.price} image={item.image} />
      )}
      contentContainerStyle={{
    paddingHorizontal: 10, // Add padding to the left and right
    paddingBottom: 20, // Add padding to the bottom
    marginTop: 10,
  }}
    />
  );
}
