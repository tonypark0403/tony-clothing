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

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <SignIn
        user={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignInContainer;
