import React, { Component } from "react";
import SignIn from "./SignIn";

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {};

  render() {
    return (
      <SignIn
        user={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default SignInContainer;
