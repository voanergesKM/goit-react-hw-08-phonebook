import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
// import { theme } from './utils/theme';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider, createTheme } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#a98274',
//       main: '#795548',
//       dark: '#4b2c20',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#cfcfcf',
//       main: '#9e9e9e',
//       dark: '#707070',
//       contrastText: '#000000',
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
