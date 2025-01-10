import React from "react";
import { View,Text, FlatList } from "react-native";
import Card from "./common/Card";
import { Data } from "./data/data";
import CheckoutItem from "./common/CheckoutItem";
export default 
function DetailsScreen() {
    const data = Data;
  return (
      <FlatList 
      data = {data}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
                          return(
                        <CheckoutItem
                          name = {item.name}
                          price = {item.price}
                          image = {item.image}
                          />
                          )
                      }}
                      contentContainerStyle = {{justifyContent:'center', alignItems:'center'}}
      />
  );
}
