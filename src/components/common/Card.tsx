import React, { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { addToCart } from '../../redux/slices/cartSlice';
const { width } = Dimensions.get('window');

interface CardProps {
  productId: string;
  name: string;
  price: string;
  quantity : number,
}

const Card: React.FC<CardProps> = (props: { productId: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; image: any; }) => {
  const dispatch = useDispatch<AppDispatch>();
    const product = {
      productId: props.productId,
      name: props.name,
      price: props.price,
    };
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log(product.productId);
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: props.image }} style={styles.image} />
        <Text style={styles.nameText}>{props.name}</Text>
        <Text style={styles.priceText}>
          Price : ${props.price}
        </Text>
      <View style = {{flexDirection : 'row', gap : 10, marginBottom : 5,}}>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width /2.3,
    margin: 10,
    padding: 15,
    backgroundColor: '#FFF2E1',
    borderWidth : 0.5,
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
    justifyContent : 'center',
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color : '#A79277',
  },
  priceText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    color : '#A79277',
  },
  button: {
    width : 150,
    marginTop: 10,
    borderRadius: 10,
    padding : 10,
    backgroundColor: '#D1BB9E',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize : 16,
    color : '#FEFCF3',
  }
});

export default Card;
