import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window')

export default function CheckoutHeader() {
  return (
     <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '90%', backgroundColor: '#D9EAFD', padding: 20, borderRadius: 5, marginVertical: 10,  color : 'white',
        backgroundColor : 'black', }}>
            <Text style={styles.nameStyle}>Name</Text>
            <Text style={styles.priceStyle}>Price($)</Text>
            <Text style={styles.quantityStyle}>Quantity</Text>
            <Text >     </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    nameStyle: {
        width: width / 2.5,
        fontSize : 16,
        fontWeight : 500,
        color : 'white',
    },
    priceStyle :{
        width : width / 5,
        fontSize : 16,
        fontWeight : 500,
        color : 'white',
    },
    quantityStyle :{
        width : width / 5,
        fontSize : 16,
        fontWeight : 500,
        color : 'white',
    },
})