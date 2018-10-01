import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import { Provider } from 'react-redux'
// import { Store } from './Store/Store'

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
