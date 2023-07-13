import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'mobx-react';
import {App} from './App';
import { configure } from "mobx"
import {stores} from "./stores";
import { BrowserRouter } from "react-router-dom";

configure({
  enforceActions: "never",
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
