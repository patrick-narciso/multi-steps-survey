/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
