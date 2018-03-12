import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import initialStates from "./reducers/initialStates";
import reducer from "./reducers";

const loggerMiddleware = createLogger({
  level: "info",
  collapsed: true
});

export default () => {
  const middleware = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  let store = createStore(reducer, initialStates, middleware);
  let persistor = persistStore(store);

  return { store, persistor };
};
