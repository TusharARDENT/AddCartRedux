import React, { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

const { width } = Dimensions.get('window');

interface CheckoutProps {
    productId: string;
    name: string;
    price: string;
    quantity: number;
}

const CheckoutItem: React.FC<CheckoutProps> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const product = {
        productId: props.productId,
        name: props.name,
        price: props.price,
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
    };

    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity(product));
    };

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(product));
    };

    return (
        <View style={styles.listItem}>
            <Text style={styles.nameStyle}>{props.name}</Text>
            <Text style={styles.priceStyle}>{props.price}</Text>
            <TouchableOpacity onPress={handleDecrementQuantity} >
                <Text style={styles.decrementButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityStyle}>{props.quantity}</Text>
            <TouchableOpacity onPress={handleIncrementQuantity} >
                <Text style={styles.incrementButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRemoveFromCart} style={styles.removeButton}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#FFF2E1',
        padding: 20,
    },
    nameStyle: {
        width: width / 2.5,
        fontSize: 16,
        fontWeight: '600',
        color: '#706233',
    },
    priceStyle: {
        width: width / 5,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: '#706233',
    },
    quantityStyle: {
        padding : 5,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: '#706233',
    },
    incrementButton: {
        fontSize : 20,
        marginHorizontal: 2,
        borderRadius: 5,
        color: '#706233',
    },
    decrementButton: {
        fontSize : 20,
        fontWeight : 900,
        marginHorizontal: 5,
        borderRadius: 5,
        color: '#706233',
    },
    removeButton: {
        maxHeight: 30,
        borderRadius: 5,
        backgroundColor: '#FFAAAA',
        paddingHorizontal: 10,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent : 'center',
    },
});

export default CheckoutItem;