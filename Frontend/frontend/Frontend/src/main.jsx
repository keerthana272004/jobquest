import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./Components/Redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);