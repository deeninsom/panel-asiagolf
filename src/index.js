import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
