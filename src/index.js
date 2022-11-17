import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { theme } from './utils/theme';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
