import React, { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, Dimensions, TouchableOpacity } from 'react-native'
import { removeFromCart } from '../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
const {width} = Dimensions.get('window')

interface CheckoutProps {
    productId: string;
    name: string;
    price: string;
    quantity : number,
  }

const CheckoutItem: React.FC<CheckoutProps> = (props: { productId: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; }) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartProducts = useSelector((state: RootState) => state.cart.productArray);
    const product = {
      productId: props.productId,
      name: props.name,
      price: props.price,
    };

      const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
      };

    return (
        <View style={styles.listItem}>
            <Text style={styles.nameStyle}>{props.name}</Text>
            <Text style={styles.priceStyle}>{props.price}</Text>
            <Text style={styles.quantityStyle}>{props.quantity}</Text>
            <TouchableOpacity onPress={handleRemoveFromCart}>
                <Text  style={{borderRadius : 5, backgroundColor : '#FF748B', padding : 2, fontWeight : 500}}> X </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    listItem : { flexDirection: "row",
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: '#FFF2E1',
        padding: 20,
        // borderRadius: 5,
},

    nameStyle: {
        width: width / 2.5,
        fontSize : 16,
        fontWeight : 600,
        color: '#706233' ,
    },
    priceStyle :{
        width : width / 5,
        fontSize : 16,
        fontWeight : 600,
        textAlign : 'center',
        color: '#706233' ,
    },
    quantityStyle :{
        width : width / 5,
        fontSize : 16,
        fontWeight : 600,
        textAlign : 'center',
        color: '#706233',
    },
})
export default CheckoutItem;
