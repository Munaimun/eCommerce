import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./context/userContext";
import { ProductsProvider } from "./context/ProductsContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
