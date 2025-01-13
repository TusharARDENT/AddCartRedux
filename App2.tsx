// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Counter from './src/components/Counter';
const App2 = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App2;
