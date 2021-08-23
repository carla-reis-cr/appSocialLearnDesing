import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from "react-native-paper";
import App from './src';
import { theme } from './src/core/theme';

export default function Main() {
  return (
    <Provider theme={theme}>
      <App />
    </Provider>
  );
}
AppRegistry.registerComponent( '', () => Main);