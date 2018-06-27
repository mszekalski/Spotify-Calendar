import React from "react";
import CalendarAreaContainer from "./calendar/calendar_area_container.js";

import { Route, HashRouter, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";

const App = () => (
  <div className="app">
    <Route path="/" component={CalendarAreaContainer} />
  </div>
);

export default App;
