import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'; 
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/slices/counterSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { Button } from '@react-navigation/elements';
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice';
const { width } = Dimensions.get('window');

// Define the props interface
interface CardProps {
  image: string;
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <Text style={styles.nameText}>{props.name}</Text>
      {/* <Text style={styles.countText}>{count}</Text> */}
      <Text style={styles.priceText}>
        {props.price}
      </Text>
      <View style = {{flexDirection : 'row'}}>
        <Button style={styles.button} onPress={() => dispatch(addToCart())}>
          Add to Cart
        </Button>
        <Button style={styles.button} onPress={() => dispatch(removeFromCart())}>
          Remove from Cart
        </Button>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  cardContainer: {
    width: width - 40,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent : 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  countText: {
    fontSize: 16,
    color: '#555',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    marginTop: 15,
  },
});

export default Card;
