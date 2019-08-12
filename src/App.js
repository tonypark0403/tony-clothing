import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Switch className="App">
        <Route path="/shop" component={Shop} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
