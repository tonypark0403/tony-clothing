import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Shop from "./pages/shop";
import Header from "./components/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            } //, // callback after updating state
            // () => {
            //   console.log(this.state);
            // });
          );
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth }); // null when sign out
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch className="App">
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </>
    );
  }
}

export default App;
