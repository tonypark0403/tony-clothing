import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Header from "./components/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";

function App() {
  return (
    <>
      <Header />
      <Switch className="App">
        <Route path="/signin" component={SignInAndSignUp} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
