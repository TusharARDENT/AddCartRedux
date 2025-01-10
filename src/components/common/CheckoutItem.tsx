import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function CheckoutItem(props : any) {
    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '90%', backgroundColor: '#D9EAFD', padding: 20, borderRadius: 5, marginVertical: 10 }}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.price}</Text>
            <Text style={styles.text}>Quantity</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize : 16,
        fontWeight : 500,
    },
})