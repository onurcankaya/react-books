import React from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { BooksProvider } from './context/books';
import theme from './theme';
import { App } from './App';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BooksProvider>
        <App />
      </BooksProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
