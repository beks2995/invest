import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux";
import {Provider} from "react-redux";
import Root from "./components/root";
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Root/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
