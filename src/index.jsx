import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/Store";
import { Provider } from "react-redux";

// eslint-disable-next-line
import { Context } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Provider store={store}>
          <App />
        </Provider>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
