// In App.js in a new project

import * as React from 'react';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/Home';
import DetailsScreen from './src/components/Details';
import { useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Home from './src/components/Home';
import { RootState, AppDispatch } from './src/redux/store';
import { useSelector, useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();

function RootStack() {
  const count = useSelector((state: RootState) => state.counter.count);
  // const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <Button onPress={() => navigation.navigate('Details')}>
                🛒 {count}
              </Button>
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
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