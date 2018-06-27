import React from "react";
import CalendarAreaContainer from "./calendar/calendar_area_container.js";

import { Route, HashRouter, Link, Switch } from "react-router-dom";

const App = () => (
  <div className="app">
    <CalendarAreaContainer />
  </div>
);

export default App;
