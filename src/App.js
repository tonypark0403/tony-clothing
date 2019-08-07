import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Hats from "./pages/hats";

function App() {
  return (
    <Switch className="App">
      <Route path="/hats" component={Hats} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
