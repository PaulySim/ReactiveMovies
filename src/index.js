import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components";
import "./index.scss";

const { store, persistor } = configureStore();

const FullApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<p>LOADING...</p>}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<FullApp />, document.getElementById("root"));
