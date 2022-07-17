import { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, valueObject, prefix, rtl, unit } from '@amaui/style-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const amauiStyle = new AmauiStyle(undefined, undefined, undefined, { optimize: false });

amauiStyle.plugins.add = [unit, prefix, rtl, valueObject];

root.render(
  <React.StrictMode>
    <AmauiStyleProvider value={amauiStyle}>
      <AmauiThemeProvider>
        <App />
      </AmauiThemeProvider>
    </AmauiStyleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
