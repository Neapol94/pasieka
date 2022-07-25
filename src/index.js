import React from 'react';
import './index.css';
import App from './App';
import store from './store/index';
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux/es/exports';

import reportWebVitals from './reportWebVitals';

// const root = ReactDOMClient.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </Provider>
// );

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


//document.body.style.backgroundImage = "url('images/food.png')";

reportWebVitals();
