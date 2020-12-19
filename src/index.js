import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux part 3
import {Provider} from 'react-redux';
import reduxStore from './reduxStore';

ReactDOM.render(
  <React.StrictMode>
    {/* redux part 4 */}
    <Provider store={reduxStore}>
    <App />
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
