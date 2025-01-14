import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
const {width} = Dimensions.get('window')

export default function CheckoutHeader() {

    const cartProducts = useSelector((state: RootState) => state.cart.productArray);

  return (
     <View >
        {cartProducts.length > 0 ? (
        <View style={styles.header}>
        <Text style={styles.nameStyle}>Name</Text>
        <Text style={styles.priceStyle}>Price($)</Text>
        <Text style={styles.quantityStyle}>Quantity</Text>
        <Text >     </Text>
        </View>
            ) : (<></>
                )}
     </View>
    )
}

const styles = StyleSheet.create({
        header : { 
        flexDirection: "row",
        justifyContent : 'center',
        width: '100%',
        padding: 20,
        marginBottom: 10,
        color : '#FEFCF3',
        backgroundColor : '#D1BB9E',
    },
    nameStyle: {
        width: width / 2.5,
        fontSize : 16,
        fontWeight : 800,
        color : '#FEFCF3',
    },
    priceStyle :{
        width : width / 5,
        fontSize : 16,
        fontWeight : 800,
        color : 'white',
    },
    quantityStyle :{
        width : width / 6,
        fontSize : 16,
        fontWeight : 800,
        color : 'white',
        textAlign : 'right',
    },
})