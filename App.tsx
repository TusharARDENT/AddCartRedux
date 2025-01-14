// In App.js in a new project

import * as React from 'react';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import DetailsScreen from './src/components/Details';
import { useNavigation } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/redux/store';
import { RootState } from './src/redux/store';
import { useSelector } from 'react-redux';
import SuccessPage from './src/components/SuccessPage';
import { useEffect } from 'react';
import { loadCart } from './src/redux/slices/cartSlice';

const Stack = createNativeStackNavigator();

function RootStack() {
  const cartProducts = useSelector((state: RootState) => state.cart.productArray);
  const count = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  console.log(cartProducts, 'From App', totalPrice);
  const navigation = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A79277',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color : "#FEFCF3",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            (count > 0) ?
            <Button
              onPress={() => navigation.navigate('Details')} style = {{backgroundColor : '#F5EBE0'}}>
              🛒 : {count}
            </Button>
            :
            <></>

          ),
          title: 'My home',
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Proceed to Checkout!!!' }} />
      <Stack.Screen name="SuccessPage" component={SuccessPage}
          options={{ headerBackVisible: false, title : "You'r all done!!!!" }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
    </Provider>
  );
}
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

