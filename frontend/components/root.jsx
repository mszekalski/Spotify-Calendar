import React from "react";
import { HashRouter, Route, withRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>
);

export default Root;
