import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RoktContextProvider } from './rokt-context';

ReactDOM.render(
  <RoktContextProvider
    tagId="2604482157155241279_df7a96fd3e6c4ab5b29014cef91a7849"
    sandbox={true}
  >
    <App />
  </RoktContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
