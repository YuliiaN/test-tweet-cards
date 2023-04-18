import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from 'theme';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/test-tweet-cards">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
