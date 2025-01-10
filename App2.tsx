// App.js
import React from 'react';
import { Provider } from 'react-redux';  // Import Provider to connect Redux store
import { store } from './src/redux/store';     // Import the Redux store
// import Counter from './src/components/Counter';     // Import the Counter component
import Home from './src/components/Home';
import Counter from './src/components/Counter';
const App2 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App2;
