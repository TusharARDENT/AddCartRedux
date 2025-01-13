import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import  {clearCart}  from '../../redux/slices/cartSlice';
import { useNavigation } from '@react-navigation/native';
import SuccessPage from '../SuccessPage';

const CheckoutFooter = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const cartProducts = useSelector((state: RootState) => state.cart.productArray);
    const totalPrice = cartProducts.reduce((total: number, product: { price: number; quantity: number; }) => total + (product.price * product.quantity), 0);

    const handleClearList = () =>{ 
        dispatch(clearCart());
        navigation.navigate(SuccessPage)
    };
    return (
        <><TouchableOpacity onPress={handleClearList}>
            <Text style={styles.checkoutButton}>Checkout </Text>
        </TouchableOpacity>
                <Text style = {styles.total}>
                    Total :  ${Math.round(totalPrice)}
                </Text>
        </>
    )
}


const styles = StyleSheet.create({
    checkoutButton : {
        width : width/1.05,
        padding : 20,
        borderRadius : 10,
        fontSize : 24,
        fontWeight : 900,
        color : 'white',
        backgroundColor : 'black',
        textAlign : 'center',
    },
    total : {
        width : width/1.05,
        padding : 20,
        borderRadius : 10,
        marginVertical : 10,
        fontSize : 24,
        fontWeight : 900,
        color : 'white',
        backgroundColor : 'black',
        textAlign : 'center',
    },
});

export default CheckoutFooter;
