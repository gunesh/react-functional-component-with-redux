import React, { Suspense, lazy } from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './redux';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// import { store } from './store/store';


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
