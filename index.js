// index.js
import { AppRegistry } from 'react-native';
import App2 from './App2';
import { name as appName } from './app.json';
import App from './App';

const ReduxExample = () => (
    <App />
);

AppRegistry.registerComponent(appName, () => ReduxExample);