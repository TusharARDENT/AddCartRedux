// In App.js in a new project

import * as React from 'react';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import DetailsScreen from './src/components/Details';
import { useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { RootState } from './src/redux/store';
import { useSelector } from 'react-redux';
import SuccessPage from './src/components/SuccessPage';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
const Stack = createNativeStackNavigator();

function RootStack() {
  const cartProducts = useSelector((state: RootState) => state.cart.productArray);
  const count = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  console.log(cartProducts, 'From App', totalPrice);
  const navigation = useNavigation();
  
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            (count > 0) ?
            <Button
              onPress={() => navigation.navigate('Details')}>
              🛒 : {count}
            </Button>
            :
            <></>

          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="SuccessPage" component={SuccessPage}
          options={{ headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
    </Provider>
  );
}
