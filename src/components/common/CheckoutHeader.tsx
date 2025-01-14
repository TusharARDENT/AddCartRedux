import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window')

export default function CheckoutHeader() {
  return (
     <View style={styles.header}>
            <Text style={styles.nameStyle}>Name</Text>
            <Text style={styles.priceStyle}>Price($)</Text>
            <Text style={styles.quantityStyle}>Quantity</Text>
            <Text >     </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : { flexDirection: "row",
        justifyContent: 'space-between',
        width: '90%',
        padding: 20,
        // borderRadius: 10,
        marginVertical: 10,
        color : '#FEFCF3',
        backgroundColor : '#D1BB9E',
    },
    nameStyle: {
        width: width / 2.5,
        fontSize : 16,
        fontWeight : 500,
        color : '#FEFCF3',
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