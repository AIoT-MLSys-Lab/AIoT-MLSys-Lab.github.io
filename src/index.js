import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//scss
import './style.scss'

import store from './store/index';
import { Provider } from 'react-redux';

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={(provider) => new Web3Provider(provider)}>
      <Provider store={store} >
        <App />
        
      </Provider>
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
