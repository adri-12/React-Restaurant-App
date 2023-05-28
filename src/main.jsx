import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import ErrorBoundary from "./components/ErrorBoundary";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { restaurantsApi } from "./store/apiSlice.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback="There was an error">
      <BrowserRouter>
        <ApiProvider api={restaurantsApi}>
          <App />
        </ApiProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
