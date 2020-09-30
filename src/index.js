import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //return the value of our store in all the app so we can access the state everywhere
import { store } from "./app/lib/store";
import App from "./app/views/components/App";
import { AppContainer } from "./app/views/containers/index";
import { addToCart } from "./app/lib/actions";

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
//store.dispatch(addToCart({ name: "Citron" }, 2));
//store.dispatch(addToCart({ name: "Kiwi" }, 5));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
